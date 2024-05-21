// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract OwnableContract {
    address private _owner;
    address private _superAdmin;
    mapping(address => bool) private _admins;

    event AdminAdded(address indexed admin);
    event AdminRemoved(address indexed admin);
    event SuperAdminChanged(
        address indexed previousSuperAdmin,
        address indexed newSuperAdmin
    );

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not the owner");
        _;
    }

    modifier onlySuperAdmin() {
        require(msg.sender == _superAdmin, "Not the superAdmin");
        _;
    }

    modifier onlyIsAdmin() {
        require(_admins[msg.sender], "Not an admin");
        _;
    }

    constructor(address owner, address superAdmin) {
        _owner = owner;
        _superAdmin = superAdmin;
        _admins[owner] = true;
    }

    function getOwner() public view returns (address) {
        return _owner;
    }

    function getSuperAdmin() public view returns (address) {
        return _superAdmin;
    }

    function isAdmin(address user) public view returns (bool) {
        return _admins[user];
    }

    // Renamed and visibility set to internal
    function _changeOwner(address newOwner) internal virtual onlyOwner {
        require(newOwner != address(0), "Invalid new owner address.");
        _owner = newOwner;
    }

    function _setSuperAdmin(address newSuperAdmin) internal virtual onlyOwner {
        require(
            newSuperAdmin != address(0),
            "Invalid new super admin address."
        );
        emit SuperAdminChanged(_superAdmin, newSuperAdmin);
        _superAdmin = newSuperAdmin;
    }

    function _addAdmin(address admin) internal virtual onlySuperAdmin {
        require(admin != address(0), "Invalid admin address.");
        _admins[admin] = true;
        emit AdminAdded(admin);
    }

    function _removeAdmin(address admin) internal virtual onlySuperAdmin {
        require(_admins[admin], "Not an admin.");
        _admins[admin] = false;
        emit AdminRemoved(admin);
    }
}
