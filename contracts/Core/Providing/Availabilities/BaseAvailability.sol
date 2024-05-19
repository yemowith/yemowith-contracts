// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../Accessblity/BaseAccessible.sol";
import "./Eventable/Eventable.sol";
import "./Encodable/Encodable.sol";
import "./Baseable/Baseable.sol";

contract BaseAvailability is Eventable, Encodable, Baseable {
    // Constructor to initialize the Providable contract
    constructor(address _owner) {
        _initializeProvidable(
            _owner,
            _eventableOwner,
            _encodableOwner,
            _registerableOwner
        );
    }

    // Internal function to initialize all base contracts
    function _initializeProvidable(
        address _owner,
        address _eventableOwner,
        address _encodableOwner,
        address _registerableOwner
    ) internal virtual {
        Eventable._initialize(_eventableOwner);
        Encodable._initialize(_encodableOwner);
        Registerable._initialize(_registerableOwner);
    }
    // Internal function to encode data
    function _encodeData(
        bytes memory data,
        bytes32 additionalParam
    ) internal view returns (bytes memory) {
        return _encode(data, additionalParam);
    }

    // Internal function to decode data
    function _decodeData(
        bytes memory encodedData,
        bytes32 additionalParam
    ) internal view returns (bytes memory) {
        return _decode(encodedData, additionalParam);
    }

    // Internal function to verify encoded data
    function _verifyEncodedData(
        bytes memory encodedData,
        bytes memory originalData,
        bytes32 additionalParam
    ) internal view returns (bool) {
        return _validateEncodedData(encodedData, originalData, additionalParam);
    }

    // Internal function to emit info event
    function _emitInfoEvent(string memory key, bytes memory detail) internal {
        _emitInfo(key, detail);
    }

    // Internal function to emit error event
    function _emitErrorEvent(
        string memory key,
        bytes memory detail,
        uint errorCode
    ) internal {
        _emitError(key, detail, errorCode);
    }

    // Internal function to emit warning event
    function _emitWarningEvent(
        string memory key,
        bytes memory detail
    ) internal {
        _emitWarning(key, detail);
    }
}
