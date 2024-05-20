// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessControl.sol";

contract SimpleBaseAccessible is BaseAccessControl {
    constructor(address owner, address superAdmin) {
        initialize(owner, superAdmin);
    }

    // Function to test adding an admin
    function testAddAdmin(address admin) public onlyRole(_getSuperAdminRole()) {
        _addAdmin(admin);
    }

    // Function to test removing an admin
    function testRemoveAdmin(
        address admin
    ) public onlyRole(_getSuperAdminRole()) {
        _removeAdmin(admin);
    }

    // Function to test adding to the whitelist
    function testAddWhitelist(
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        addWhitelist(account);
    }

    // Function to test removing from the whitelist
    function testRemoveWhitelist(
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        removeWhitelist(account);
    }

    // Function to test locking the contract
    function testLock(
        uint256 numberOfBlocks
    ) public onlyRole(_getSuperAdminRole()) {
        _lock(numberOfBlocks);
    }

    // Function to test unlocking the contract
    function testUnlock() public onlyRole(_getSuperAdminRole()) {
        _unlock();
    }

    // Function to test pausing the contract
    function testPause() public onlyRole(_getSuperAdminRole()) {
        _pause();
    }

    // Function to test unpausing the contract
    function testUnpause() public onlyRole(_getSuperAdminRole()) {
        _unpause();
    }

    // Function to test if an address is whitelisted
    function isWhitelisted(address account) public view returns (bool) {
        return hasRole(_getWhitelistRole(), account);
    }

    // Function to test changing the owner
    function testChangeOwner(
        address newOwner
    ) public onlyRole(_getOwnerRole()) {
        _changeOwner(newOwner);
    }

    // Function to test changing the super admin
    function testSetSuperAdmin(
        address newSuperAdmin
    ) public onlyRole(_getOwnerRole()) {
        _setSuperAdmin(newSuperAdmin);
    }

    // Function to test granting a role
    function testGrantRole(
        bytes32 role,
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        _grantRole(role, account);
    }

    // Function to test revoking a role
    function testRevokeRole(
        bytes32 role,
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        _revokeRole(role, account);
    }

    // Function to test renouncing a role
    function testRenounceRole(bytes32 role) public {
        renounceRole(role, msg.sender);
    }

    // Function to test setting a role admin
    function testSetRoleAdmin(
        bytes32 role,
        bytes32 newAdminRole
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        setRoleAdmin(role, newAdminRole);
    }

    // Function to check if an address has a specific role
    function hasSpecificRole(
        bytes32 role,
        address account
    ) public view returns (bool) {
        return hasRole(role, account);
    }
}
