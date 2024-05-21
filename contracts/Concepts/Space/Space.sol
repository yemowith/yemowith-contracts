// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Objective/Accessblity/BaseAccessControl.sol";

contract Space is BaseAccessControl {
    address public _accountRegistry;
    address public _contractManager;
    address public _gatewaysManagement;
    address public AppliesConcepts;
    address public _encoder;
}
