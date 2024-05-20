// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract Executor is BaseAccessible {
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");
    bytes32 public constant STATIC_CALLER_ROLE =
        keccak256("STATIC_CALLER_ROLE");
    bytes32 public constant MULTI_EXECUTOR_ROLE =
        keccak256("MULTI_EXECUTOR_ROLE");

    function _initialize(address owner) internal override(BaseAccessible) {
        super._initialize(owner);
        _setupRole(DEFAULT_ADMIN_ROLE, owner);
        _setupRole(EXECUTOR_ROLE, owner);
        _setupRole(STATIC_CALLER_ROLE, owner);
        _setupRole(MULTI_EXECUTOR_ROLE, owner);
    }

    function _execute(
        address target,
        bytes memory data
    ) internal onlyAvailable onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "Execution failed");
        return result;
    }

    function execute(
        address target,
        bytes memory data
    ) external onlyAvailable onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
        return _execute(target, data);
    }

    function multiExecute(
        address[] memory targets,
        bytes[] memory data
    )
        external
        onlyAvailable
        onlyRole(MULTI_EXECUTOR_ROLE)
        returns (bytes[] memory)
    {
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
    ) external onlyAvailable onlyRole(EXECUTOR_ROLE) returns (bytes memory) {
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
        onlyAvailable
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
    ) external pure returns (bytes memory) {
        return abi.encodeWithSignature(signature, params);
    }

    function getEncodedData(
        address target,
        string memory signature,
        bytes memory params
    ) external pure returns (address, bytes memory) {
        return (target, abi.encodeWithSignature(signature, params));
    }
}
