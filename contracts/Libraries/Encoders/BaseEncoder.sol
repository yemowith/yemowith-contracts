// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Initializable} from "../../helpers/abilities.sol";
/**
 * @title BaseEncoder
 * @dev This contract provides encoding and decoding functionalities using a private constant salt.
 */
contract BaseEncoder is Initializable {
    // Private salt for encoding and decoding
    bytes32 private _salt;

    /**
     * @dev Initializes the contract with the owner address.
     * @param owner The address of the owner.
     */
    function initialize(address owner) external {
        _initialize(owner);
        _salt = keccak256(abi.encodePacked(owner));
    }

    /**
     * @dev Encodes data using the private salt and an additional parameter.
     * @param data The data to be encoded.
     * @param additionalParam The additional parameter to be included in the encoding.
     * @return encodedData The encoded data.
     */
    function _encode(
        bytes memory data,
        bytes32 additionalParam
    ) external view onlyInitialized returns (bytes memory) {
        require(data.length > 0, "Data cannot be empty");
        return abi.encodePacked(_salt, additionalParam, data);
    }

    function _decode(
        bytes memory encodedData,
        bytes32 additionalParam
    ) external view onlyInitialized returns (bytes memory) {
        require(
            encodedData.length > 32,
            "Encoded data is too short to contain salt and additional parameters"
        );

        // Extract the salt used in the encoding from the encoded data
        bytes32 extractedSalt;
        assembly {
            extractedSalt := mload(add(encodedData, 32))
        }

        // Validate the salt with the additionalParam
        require(
            keccak256(abi.encodePacked(extractedSalt, additionalParam)) ==
                _salt,
            "Invalid encoding parameters"
        );

        // Proceed to decode the data
        bytes memory decodedData = new bytes(encodedData.length - 32);
        for (uint256 i = 32; i < encodedData.length; i++) {
            decodedData[i - 32] = encodedData[i];
        }
        return decodedData;
    }
}
