// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable, Pausable, Lockable } from "../../helpers/abilities.sol";

contract Executor is Ownable, Pausable, Lockable {
    constructor() {}

    struct Call {
        address target;
        bytes callData;
        bool allowFailure;
    }

    struct StaticCall {
        address target;
        bytes callData;
    }

    struct Result {
        bool success;
        bytes returnData;
    }

    // Tek bir çağrıyı yürütür ve gaz iadesi yapar
    function execute(
        address target,
        bytes calldata data
    ) external payable onlyOwner returns (bool, bytes memory) {
        (bool success, bytes memory returnData) = target.call{
            value: msg.value
        }(data);
        require(success, "Execution failed");

        return (success, returnData);
    }

    // Çoklu çağrıları yürütür ve gaz iadesi yapar
    function multiExecute(
        Call[] calldata calls
    ) external onlyOwner returns (Result[] memory results) {
        results = new Result[](calls.length);

        for (uint256 i = 0; i < calls.length; i++) {
            (bool success, bytes memory returnData) = calls[i].target.call(
                calls[i].callData
            );
            if (!success && !calls[i].allowFailure) {
                revert("One of the executions failed without allowance");
            }
            results[i] = Result({ success: success, returnData: returnData });
        }
    }

    // Yalnızca-okuma çağrıları yürütür
    function staticExecute(
        StaticCall[] calldata calls
    ) external view returns (Result[] memory results) {
        results = new Result[](calls.length);

        for (uint256 i = 0; i < calls.length; i++) {
            (bool success, bytes memory returnData) = calls[i]
                .target
                .staticcall(calls[i].callData);
            results[i] = Result({ success: success, returnData: returnData });
        }
    }
}
