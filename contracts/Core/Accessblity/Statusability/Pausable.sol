// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Pausable {
    bool private _isPaused;

    event Paused();
    event Unpaused();

    modifier notPaused() {
        require(!_isPaused, "Contract is paused");
        _;
    }

    function _pause() internal virtual {
        _isPaused = true;
        emit Paused();
    }

    function _unpause() internal virtual {
        _isPaused = false;
        emit Unpaused();
    }

    function isPaused() public view returns (bool) {
        return _isPaused;
    }
}
