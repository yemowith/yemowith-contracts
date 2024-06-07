// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../objective/Binders/WithEncoder.sol";
import "../../objective/Binders/WithDeployer.sol";
import "../../objective/Binders/WithExecutor.sol";

contract BaseFactory is WithEncoder, WithDeployer, WithExecutor {}
