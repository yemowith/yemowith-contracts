// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Helpers/Excuters/Executor.sol";

abstract contract WithExcuter is Executor {
    function execute(
        address target,
        bytes memory data
    ) external override onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        return _execute(target, data);
    }

    function multiExecute(
        address[] memory targets,
        bytes[] memory data
    ) external override onlyRole(MULTI_EXECUTOR_ROLE) returns (bytes[] memory) {
        require(
            targets.length == data.length,
            "Targets and data length mismatch"
        );
        bytes[] memory results = new bytes[](targets.length);
        for (uint256 i = 0; i < targets.length; i++) {
            results[i] = _execute(targets[i], data[i]);
        }
        return results;
    }

    function call(
        address target,
        bytes memory data
    ) external override onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "Call failed");
        return result;
    }

    function callStatic(
        address target,
        bytes memory data
    )
        external
        view
        override
        onlyRole(STATIC_CALLER_ROLE)
        returns (bytes memory)
    {
        (bool success, bytes memory result) = target.staticcall(data);
        require(success, "Static call failed");
        return result;
    }

    function getEncodedData(
        string memory signature,
        bytes memory params
    ) external pure override returns (bytes memory) {
        return abi.encodeWithSignature(signature, params);
    }

    function getEncodedData(
        address target,
        string memory signature,
        bytes memory params
    ) external pure override returns (address, bytes memory) {
        return (target, abi.encodeWithSignature(signature, params));
    }
}
