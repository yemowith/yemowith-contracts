// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AccessControl/AccessControl.sol";
import "./Statusability/Statusable.sol";
import "./Initializable/Initializable.sol";

abstract contract BaseAccessControl is
    AccessControl,
    Statusable,
    Initializable
{
    bytes32 private constant INIT_KEY =
        keccak256("AccessControl.Initialization");
    bytes32 public constant WHITELIST_ROLE = keccak256("WHITELIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() AccessControl(msg.sender, msg.sender, msg.sender) {}

    modifier onlyWhitelisted() {
        require(
            hasRole(WHITELIST_ROLE, msg.sender),
            "AdvancedAccessControl: caller is not whitelisted"
        );
        _;
    }

    function initialize(
        address owner,
        address superAdmin,
        address admin
    ) public virtual initializer {
        require(!isInitialized(), "AdvancedAccessControl: already initialized");
        _setupRole(_getOwnerRole(), owner);
        _setupRole(DEFAULT_ADMIN_ROLE, admin);
        _setupRole(_getSuperAdminRole(), superAdmin);
        _initialize();
    }

    function _changeOwner(address newOwner) internal override {
        address oldOwner = getOwner();
        super._changeOwner(newOwner);
        _revokeRole(_getOwnerRole(), oldOwner);
        _grantRole(_getOwnerRole(), newOwner);
    }

    function _setSuperAdmin(address newSuperAdmin) internal override {
        address oldSuperAdmin = getSuperAdmin();
        super._setSuperAdmin(newSuperAdmin);
        _revokeRole(_getSuperAdminRole(), oldSuperAdmin);
        _grantRole(_getSuperAdminRole(), newSuperAdmin);
    }

    function _lock(
        uint256 numberOfBlocks
    ) internal override onlyRole(_getSuperAdminRole()) {
        super._lock(numberOfBlocks);
    }

    function _unlock() internal override onlyRole(_getSuperAdminRole()) {
        super._unlock();
    }

    function _pause() internal override onlyRole(_getSuperAdminRole()) {
        super._pause();
    }

    function _unpause() internal override onlyRole(_getSuperAdminRole()) {
        super._unpause();
    }

    function addWhitelist(
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        _grantRole(_getWhitelistRole(), account);
    }

    function removeWhitelist(
        address account
    ) public onlyRole(_getSuperAdminRole()) {
        _revokeRole(_getWhitelistRole(), account);
    }

    function _addAdmin(address admin) internal override {
        super._addAdmin(admin);
        _grantRole(_getAdminRole(), admin);
    }

    function _removeAdmin(address admin) internal override {
        super._removeAdmin(admin);
        _revokeRole(_getAdminRole(), admin);
    }

    // Private functions to get defined roles
    function _getOwnerRole() internal pure returns (bytes32) {
        return keccak256("OWNER_ROLE");
    }

    function _getSuperAdminRole() internal pure returns (bytes32) {
        return keccak256("SUPER_ADMIN_ROLE");
    }

    function _getWhitelistRole() internal pure returns (bytes32) {
        return keccak256("WHITELIST_ROLE");
    }

    function _getAdminRole() internal pure returns (bytes32) {
        return keccak256("ADMIN_ROLE");
    }
}
