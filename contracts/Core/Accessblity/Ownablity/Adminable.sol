// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Initializable/Initializable.sol";

abstract contract Adminable is Initializable {
    address private _superAdmin;
    mapping(address => bool) private _admins;

    event SuperAdminChanged(
        address indexed oldSuperAdmin,
        address indexed newSuperAdmin
    );
    event AdminStatusChanged(address indexed admin, bool status);

    modifier onlySuperAdmin() {
        require(msg.sender == _superAdmin, "Caller is not the superAdmin");
        _;
    }

    modifier onlyAdmin() {
        require(
            _admins[msg.sender] || msg.sender == _superAdmin,
            "Caller is not an admin"
        );
        _;
    }

    function _initialize(address owner) internal virtual override {
        super._initialize(owner); // Call the base initialization
        _superAdmin = owner; // Set the owner as the initial super admin
    }

    function _setSuperAdmin(address newSuperAdmin) internal onlyOwner {
        require(
            newSuperAdmin != address(0),
            "Invalid new super admin address."
        );
        emit SuperAdminChanged(_superAdmin, newSuperAdmin);
        _superAdmin = newSuperAdmin;
    }

    function _setAdminStatus(
        address admin,
        bool status
    ) internal onlySuperAdmin {
        _admins[admin] = status;
        emit AdminStatusChanged(admin, status);
    }

    function isAdmin(address user) public view returns (bool) {
        return _admins[user] || user == _superAdmin;
    }
}
