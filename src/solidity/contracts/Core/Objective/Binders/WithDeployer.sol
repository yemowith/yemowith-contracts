// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solidity/contracts/Core/Helpers/Deployer/BaseDeployer.sol";

abstract contract WithDeployer is BaseDeployer {
    function deployContract(
        bytes memory bytecode,
        bytes32 salt
    ) external virtual returns (address) {
        return initiateDeployment(bytecode, salt);
    }

    function computeContractAddress(
        bytes memory bytecode,
        bytes32 salt
    ) external view virtual returns (address) {
        return _computeAddress(bytecode, salt);
    }
}
