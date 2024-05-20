// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Lockable.sol";
import "./Pausable.sol";

// Ensure that Lockable and Pausable do not have conflicting functionalities
abstract contract Statusable is Lockable, Pausable {
    modifier notLockedOrPaused() {
        require(!isLocked() && !isPaused(), "Contract is locked or paused");
        _;
    }

    modifier whenLockedOrPaused() {
        require(isLocked() || isPaused(), "Contract is not locked or paused");
        _;
    }
}
