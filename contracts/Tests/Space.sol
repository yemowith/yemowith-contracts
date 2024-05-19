// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract Space is BaseAccessible {
    address public _accountRegistry;
    address public _contractManager;
    address public _encoder;
}
