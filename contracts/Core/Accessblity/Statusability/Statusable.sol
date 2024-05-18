// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Lockable.sol";
import "./Pausable.sol";

// Ensure that Lockable and Pausable do not have conflicting functionalities
contract Statusable is Lockable, Pausable {
    // Event for indicating successful initialization of Statusable
    event StatusableInitialized(address indexed owner);

    // Override the _initialize function to handle multiple inheritance
    function _initialize(
        address owner
    ) internal virtual override(Lockable, Pausable) {
        Lockable._initialize(owner); // Initialize Lockable
        Pausable._initialize(owner); // Initialize Pausable
        emit StatusableInitialized(owner); // Emit an event after initialization
    }

    // Override the _lock function to handle multiple inheritance
    function _lock(uint256 numberOfBlocks) internal virtual override(Lockable) {
        Lockable._lock(numberOfBlocks); // Lock the contract
    }

    // Override the _unlock function to handle multiple inheritance
    function _unlock() internal virtual override(Lockable) {
        Lockable._unlock(); // Unlock the contract
    }

    // Override the _pause function to handle multiple inheritance
    function _pause() internal virtual override(Pausable) {
        Pausable._pause(); // Pause the contract
    }

    // Override the _unpause function to handle multiple inheritance
    function _unpause() internal virtual override(Pausable) {
        Pausable._unpause(); // Unpause the contract
    }
}
