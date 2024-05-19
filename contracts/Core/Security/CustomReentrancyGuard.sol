// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract CustomReentrancyGuard {
    // Constants to represent the status of the guard
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    // Variable to store the current status
    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    // Modifier to prevent reentrancy
    modifier nonReentrant() {
        // Check if the guard is already entered
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Set the status to entered
        _status = _ENTERED;

        // Execute the function
        _;

        // Reset the status to not entered
        _status = _NOT_ENTERED;
    }
}
