// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Executor {
    function execute(
        address target,
        bytes memory data
    ) public returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "Execution failed");
        return result;
    }

    function multiExecute(
        address[] memory targets,
        bytes[] memory data
    ) public returns (bytes[] memory) {
        require(
            targets.length == data.length,
            "Targets and data length mismatch"
        );
        bytes[] memory results = new bytes[](targets.length);
        for (uint256 i = 0; i < targets.length; i++) {
            results[i] = execute(targets[i], data[i]);
        }
        return results;
    }

    function call(
        address target,
        bytes memory data
    ) public returns (bytes memory) {
        (bool success, bytes memory result) = target.call(data);
        require(success, "Call failed");
        return result;
    }

    function callStatic(
        address target,
        bytes memory data
    ) public view returns (bytes memory) {
        (bool success, bytes memory result) = target.staticcall(data);
        require(success, "Static call failed");
        return result;
    }
}
