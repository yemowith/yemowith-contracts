// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract Encodable is BaseAccessible {
    bytes32 private _salt;
    bytes32 private constant ENCODER_ROLE = keccak256("ENCODER_ROLE");

    modifier onlyInitializedEncoder() {
        require(_salt != 0, "Encoder not initialized");
        _;
    }

    function _initialize(address owner) internal virtual {
        BaseAccessible._initialize(owner);
        _setupRole(ENCODER_ROLE, owner);
        _initializeEncoder(owner);
    }

     function _allowEncoder(address newEncoder) internal virtual {
        require(
            newEncoder != address(0),
            "Encodable: new encoder cannot be the zero address"
        );
        _grantRole(ENCODER_ROLE, newEncoder);
    }


    function _initializeEncoder(address owner) internal virtual BaseAccessible.onlyInitialized() {
        _initializeSalt(owner);
    }

    function _initializeSalt(address owner) internal virtual BaseAccessible.onlyInitialized() {
        _salt = keccak256(abi.encodePacked(owner));
    }

    function _encode(
        bytes memory data,
        bytes32 additionalParam
    ) internal view  onlyInitializedEncoder() returns (bytes memory) {
        require(data.length > 0, "Data cannot be empty");
        return abi.encodePacked(_salt, additionalParam, data);
    }

    function _decode(
        bytes memory encodedData,
        bytes32 additionalParam
    ) internal view onlyInitializedEncoder() returns (bytes memory) {
        require(
            encodedData.length > 32,
            "Encoded data is too short to contain salt and additional parameters"
        );

        bytes32 extractedSalt;
        assembly {
            extractedSalt := mload(add(encodedData, 32))
        }

        require(
            keccak256(abi.encodePacked(extractedSalt, additionalParam)) ==
                _salt,
            "Invalid encoding parameters"
        );

        bytes memory decodedData = new bytes(encodedData.length - 32);
        for (uint256 i = 32; i < encodedData.length; i++) {
            decodedData[i - 32] = encodedData[i];
        }
        return decodedData;
    }

    function _validateEncodedData(
        bytes memory encodedData,
        bytes memory originalData,
        bytes32 additionalParam
    ) internal view onlyInitializedEncoder() returns (bool) {
        bytes memory decodedData = _decode(encodedData, additionalParam);

        if (keccak256(decodedData) != keccak256(originalData)) {
            return false;
        }

        bytes32 validationHash = keccak256(
            abi.encodePacked(decodedData, additionalParam)
        );
        return validationHash == _salt;
    }

    function decode(
        bytes memory encodedData,
        bytes32 additionalParam
    ) external view onlyRole(ENCODER_ROLE) returns (bytes memory) {
        return _decode(encodedData, additionalParam);
    }

    function encode(
        bytes memory data,
        bytes32 additionalParam
    ) external view onlyRole(ENCODER_ROLE) returns (bytes memory) {
        return _encode(data, additionalParam);
    }

    function verifyEncodedData(
        bytes memory encodedData,
        bytes memory originalData,
        bytes32 additionalParam
    ) external view onlyRole(ENCODER_ROLE) returns (bool) {
        return _validateEncodedData(encodedData, originalData, additionalParam);
    }

    function getSalt() external view onlyRole(ENCODER_ROLE) returns (bytes32) {
        return _salt;
    }

    function getEncoderRole() external pure returns (bytes32) {
        return ENCODER_ROLE;
    }

    function addEncoderManager(address newManager) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newManager != address(0), "Encodable: new manager cannot be the zero address");
        _grantRole(ENCODER_ROLE, newManager);
    }
}
