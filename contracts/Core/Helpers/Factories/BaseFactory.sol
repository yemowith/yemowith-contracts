// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Binders/WithEncoder.sol";
import "contracts/Core/Binders/WithDeployer.sol";
import "contracts/Core/Binders/WithExcuter.sol";

contract BaseFactory is WithEncoder, WithDeployer, WithExcuter {}
