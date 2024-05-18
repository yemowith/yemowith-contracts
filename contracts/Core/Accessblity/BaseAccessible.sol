// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownablity/Adminable.sol";
import "./Statusability/Statusable.sol";
import "./AccessControl/AccessControl.sol";

// Combines administrative controls with locking, pausing, and direct role management functionalities
abstract contract BaseAccessible is Adminable, Statusable, AccessControl {
    // Event for indicating successful initialization of Accessible
    event AccessibleInitialized(address indexed owner);

    // Define roles for locking, pausing, and super administration
    bytes32 public constant LOCKER_ROLE = keccak256("LOCKER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant SUPER_ADMIN_ROLE = keccak256("SUPER_ADMIN_ROLE");

    // Override the _initialize function to handle multiple inheritance and role setup
    function _initialize(
        address owner
    ) internal virtual override(Adminable, Statusable) {
        Adminable._initialize(owner); // Initialize Adminable
        Statusable._initialize(owner); // Initialize Statusable
        _setupRole(DEFAULT_ADMIN_ROLE, owner); // Setup default admin role
        _setupRole(SUPER_ADMIN_ROLE, owner); // Setup super admin role
        _setupRole(LOCKER_ROLE, owner); // Setup locker role
        _setupRole(PAUSER_ROLE, owner); // Setup pauser role
        emit AccessibleInitialized(owner); // Emit an event after initialization
    }

    // Internal function to grant a role, restricted to SUPER_ADMIN_ROLE
    function _grantRole(
        bytes32 role,
        address account
    ) internal override Adminable.onlyInitialized() onlyRole(SUPER_ADMIN_ROLE) {
        AccessControl._grantRole(role, account);
    }

    // Internal function to revoke a role, restricted to SUPER_ADMIN_ROLE
    function _revokeRole(
        bytes32 role,
        address account
    ) internal override Adminable.onlyInitialized() onlyRole(SUPER_ADMIN_ROLE) {
        AccessControl._revokeRole(role, account);
    }

    // Internal function to change the admin role, restricted to SUPER_ADMIN_ROLE
    function _setRoleAdmin(
        bytes32 role,
        bytes32 newAdminRole
    ) internal override Adminable.onlyInitialized() onlyRole(SUPER_ADMIN_ROLE) {
        AccessControl._setRoleAdmin(role, newAdminRole);
    }

    // Override the _lock function to include role checks
    function _lock(
        uint256 numberOfBlocks
    ) internal override(Statusable) Statusable.onlyInitialized() onlyRole(LOCKER_ROLE) {
        Statusable._lock(numberOfBlocks); // Lock the contract with locker role permission
    }

    // Override the _unlock function to include role checks
    function _unlock() internal override(Statusable) Statusable.onlyInitialized() onlyRole(LOCKER_ROLE) {
        Statusable._unlock(); // Unlock the contract with locker role permission
    }

    // Override the _pause function to include role checks
    function _pause() internal override(Statusable) Statusable.onlyInitialized() onlyRole(PAUSER_ROLE) {
        Statusable._pause(); // Pause the contract with pauser role permission
    }

    // Override the _unpause function to include role checks
    function _unpause() internal override(Statusable) Statusable.onlyInitialized() onlyRole(PAUSER_ROLE) {
        Statusable._unpause(); // Unpause the contract with pauser role permission
    }

   
}
