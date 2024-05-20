// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Helpers/Encoders/BaseEncoder.sol";

abstract contract WithEncoder is BaseEncoder {
    function encodeData(
        bytes memory data,
        bytes32 additionalParam
    ) external view virtual returns (bytes memory) {
        return _encode(data, additionalParam);
    }

    function decodeData(
        bytes memory encodedData,
        bytes32 additionalParam
    ) external view virtual returns (bytes memory) {
        return _decode(encodedData, additionalParam);
    }

    function validateEncodedData(
        bytes memory encodedData,
        bytes memory originalData,
        bytes32 additionalParam
    ) external view virtual returns (bool) {
        return _validateEncodedData(encodedData, originalData, additionalParam);
    }
}
