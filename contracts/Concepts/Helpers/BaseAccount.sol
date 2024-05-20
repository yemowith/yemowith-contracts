// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract BaseAccount is BaseAccessible {
    event Received(uint indexed value, address indexed sender, bytes data);

    address public _accountRegistry;
    address public _encoder;
    bytes32 private _salt;

    function _initializeSalt(address owner) internal {
        _salt = keccak256(abi.encodePacked(owner));
    }

    function _initializeAccount(
        address owner,
        address accountRegistry,
        address encoder
    ) internal virtual {
        _initialize(owner);
        _initializeSalt(owner);
        _accountRegistry = accountRegistry;
        _encoder = encoder;
    }
}
