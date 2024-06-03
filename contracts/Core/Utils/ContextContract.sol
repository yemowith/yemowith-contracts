// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract ContextContract {
    function _msg_Sender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msg_Data() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _context_Suffix_Length() internal view virtual returns (uint256) {
        return 0;
    }

    function _msg_Sig() internal view virtual returns (bytes4) {
        return msg.sig;
    }
}
