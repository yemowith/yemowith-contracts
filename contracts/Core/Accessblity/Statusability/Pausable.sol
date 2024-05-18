// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Ownablity/Adminable.sol"; // Ensure the path is correct

abstract contract Pausable is Adminable {
    bool private _isPaused;

    event Paused();
    event Unpaused();

    modifier notPaused() {
        require(!_isPaused, "Contract is paused");
        _;
    }

    function _initialize(address owner) internal virtual override {
        super._initialize(owner); // Initialize the base Adminable contract
        _isPaused = false; // Initially, the contract is not paused
    }

    function _pause() internal virtual onlySuperAdmin {
        _isPaused = true;
        emit Paused();
    }

    function _unpause() internal virtual onlySuperAdmin {
        _isPaused = false;
        emit Unpaused();
    }

    function isPaused() public view returns (bool) {
        return _isPaused;
    }
}
