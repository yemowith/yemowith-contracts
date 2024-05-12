// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Initializable} from "../../../../Helpers/Abilities.sol";

abstract contract BaseObject is Initializable {
    mapping(address => bool) private _admins;
    address private _superAdmin;
    bool private _paused;
    bool private _locked;
    uint256 private _lockDuration;
    uint256 private _lockTime;

    event AdminStatusChanged(address indexed admin, bool status);
    event SuperAdminChanged(
        address indexed oldSuperAdmin,
        address indexed newSuperAdmin
    );
    event Paused();
    event Unpaused();
    event Locked(uint256 duration, uint256 timestamp);
    event Unlocked(uint256 timestamp);

    modifier onlySuperAdmin() {
        require(msg.sender == _superAdmin, "Caller is not the superAdmin");
        _;
    }

    modifier onlyAdmin() {
        require(
            _admins[msg.sender] || msg.sender == _superAdmin,
            "Caller is not an admin or the superAdmin"
        );
        _;
    }

    modifier whenNotPaused() {
        require(!_paused, "Contract is paused");
        _;
    }

    modifier whenNotLocked() {
        require(!_locked, "Contract is locked");
        _;
    }

    modifier whenLockExpired() {
        require(
            block.timestamp >= _lockTime + _lockDuration,
            "Lock duration has not expired"
        );
        _;
    }

    function addAdmin(address admin) public onlySuperAdmin {
        require(admin != address(0), "Invalid admin address");
        _setAdminStatus(admin, true);
    }

    function removeAdmin(address admin) public onlySuperAdmin {
        require(admin != address(0), "Invalid admin address");
        _setAdminStatus(admin, false);
    }

    function changeSuperAdmin(address newSuperAdmin) public onlySuperAdmin {
        require(newSuperAdmin != address(0), "Invalid new superAdmin address");
        _setPaused(true);
    }

    function pause() public onlyAdmin onlyInitialized {
        _setPaused(true);
    }

    function unpause() public onlySuperAdmin onlyInitialized {
        _setPaused(false);
    }

    function lock(uint256 duration) public onlyAdmin onlyInitialized {
        _setLockState(true, duration);
    }

    function unlock()
        external
        onlyAdmin
        onlySuperAdmin
        whenLockExpired
        onlyInitialized
        returns (bool)
    {
        _setLockState(false, 0);
        return true;
    }

    function isSuperAdmin(address addr) internal view returns (bool) {
        return addr == _superAdmin;
    }

    function isAdmin(address addr) public view returns (bool) {
        return _admins[addr] || addr == _superAdmin;
    }

    function isPaused() public view returns (bool) {
        return _paused;
    }

    function isLocked() internal view returns (bool) {
        return _locked;
    }

    // Private function to change the super admin
    function _changeSuperAdmin(address newSuperAdmin) private {
        _superAdmin = newSuperAdmin;
    }

    // Private function to set admin status
    function _setAdminStatus(address admin, bool status) private {
        _admins[admin] = status;
        emit AdminStatusChanged(admin, status);
    }

    // Private function to set the paused state
    function _setPaused(bool state) private {
        _paused = state;
        if (state) {
            emit Paused();
        } else {
            emit Unpaused();
        }
    }

    // Private function to handle the state change of the lock
    function _setLockState(bool locked, uint256 duration) private {
        _locked = locked;
        _lockDuration = duration;
        _lockTime = locked ? block.timestamp : 0;
        if (locked) {
            emit Locked(duration, block.timestamp);
        } else {
            emit Unlocked(block.timestamp);
        }
    }
}
