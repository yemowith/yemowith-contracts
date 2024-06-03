// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solc/contracts/Core/Objective/Accessblity/BaseAccessControl.sol";

contract Executor is BaseAccessControl {
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");
    bytes32 public constant STATIC_CALLER_ROLE =
        keccak256("STATIC_CALLER_ROLE");
    bytes32 public constant MULTI_EXECUTOR_ROLE =
        keccak256("MULTI_EXECUTOR_ROLE");

    function _execute(
        address target,
        bytes memory data
    ) internal onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "Execution failed");
        return result;
    }

    function execute(
        address target,
        bytes memory data
    ) external virtual onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        return _execute(target, data);
    }

    function multiExecute(
        address[] memory targets,
        bytes[] memory data
    ) external virtual onlyRole(MULTI_EXECUTOR_ROLE) returns (bytes[] memory) {
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
    ) external virtual onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
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
        virtual
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
    ) external pure virtual returns (bytes memory) {
        return abi.encodeWithSignature(signature, params);
    }

    function getEncodedData(
        address target,
        string memory signature,
        bytes memory params
    ) external pure virtual returns (address, bytes memory) {
        return (target, abi.encodeWithSignature(signature, params));
    }
}
