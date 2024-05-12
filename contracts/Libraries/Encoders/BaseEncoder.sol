// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Initializable} from "../../helpers/abilities.sol";
import {WhiteistAble} from "../../helpers/WhiteistAble.sol";
/**
 * @title BaseEncoder
 * @dev This contract provides encoding and decoding functionalities using a private constant salt.
 */
abstract contract BaseEncoder is WhiteistAble, Initializable {
    // Private salt for encoding and decoding
    bytes32 private constant _salt =
        0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234;

    /**
     * @dev Encodes data using the private salt.
     * @param data The data to be encoded.
     * @return encodedData The encoded data.
     */
    function _encode(bytes memory data) internal pure returns (bytes memory) {
        require(data.length > 0, "Data cannot be empty");
        return abi.encodePacked(_salt, data);
    }

    /**
     * @dev Decodes data that was encoded with the private salt.
     * @param encodedData The data to be decoded.
     * @return decodedData The original data before encoding.
     */
    function _decode(
        bytes memory encodedData
    ) internal pure returns (bytes memory) {
        require(
            encodedData.length > 32,
            "Encoded data is too short to contain salt"
        );
        bytes memory decodedData = new bytes(encodedData.length - 32);
        for (uint256 i = 32; i < encodedData.length; i++) {
            decodedData[i - 32] = encodedData[i];
        }
        return decodedData;
    }
}
