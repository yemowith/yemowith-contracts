// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Initializable } from "contracts/Helpers/Initializable.sol";
import { BaseDeployer } from "../../../Deployer/BaseDeployer.sol";

abstract contract BaseObject is Initializable {
    address private _superAdmin;
    mapping(address => bool) private _admins;
    bool private _paused;
    bool private _locked;
    uint256 private _lockDuration;
    uint256 private _lockTime;

    address private _baseDeployer;
    address private _baseEncoder;

    event AdminStatusChanged(address indexed admin, bool status);
    event SuperAdminChanged(
        address indexed oldSuperAdmin,
        address indexed newSuperAdmin
    );
    event Paused();
    event Unpaused();
    event Locked(uint256 duration, uint256 timestamp);
    event Unlocked(uint256 timestamp);
    event DeployerCreated(address indexed deployerAddress);

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

    modifier onlyAvailable() {
        require(isInitialized(), "Contract is not initialized");
        require(
            _admins[msg.sender] || msg.sender == _superAdmin,
            "Caller is not an admin or the superAdmin"
        );
        require(!_paused, "Contract is paused");
        require(!_locked, "Contract is locked");
        require(
            block.timestamp >= _lockTime + _lockDuration,
            "Lock duration has not expired"
        );
        _;
    }

    function _initializeDeployer() private {
        BaseDeployer deployer = new BaseDeployer();
        _baseDeployer = address(deployer);
        emit DeployerCreated(_baseDeployer);
    }

    function _createDeployer() private {
        BaseDeployer newDeployer = new BaseDeployer();
        _baseDeployer = address(newDeployer);
        emit DeployerCreated(_baseDeployer);
    }

    function getDeployerAddress() private view returns (address) {
        require(_baseDeployer != address(0), "Deployer not initialized");
        return _baseDeployer;
    }

    // Private function to set admin status
    function _setAdminStatus(address admin, bool status) private {
        _admins[admin] = status;
        emit AdminStatusChanged(admin, status);
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
