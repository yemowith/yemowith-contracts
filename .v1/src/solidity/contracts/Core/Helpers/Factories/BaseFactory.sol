// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solidity/contracts/Core/Objective/Binders/WithEncoder.sol";
import "src/solidity/contracts/Core/Objective/Binders/WithDeployer.sol";
import "src/solidity/contracts/Core/Objective/Binders/WithExecutor.sol";

contract BaseFactory is WithEncoder, WithDeployer, WithExecutor {}
