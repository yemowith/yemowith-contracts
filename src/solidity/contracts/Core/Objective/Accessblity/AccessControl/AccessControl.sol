// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "../Ownablity/OwnableContract.sol";

contract AccessControl is OwnableContract {
    using EnumerableSet for EnumerableSet.AddressSet;

    struct RoleData {
        EnumerableSet.AddressSet members;
        bytes32 adminRole;
    }

    mapping(bytes32 => RoleData) private _roles;

    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant SUPER_ADMIN_ROLE = keccak256("SUPER_ADMIN_ROLE");

    event RoleGranted(
        bytes32 indexed role,
        address indexed account,
        address indexed sender
    );
    event RoleRevoked(
        bytes32 indexed role,
        address indexed account,
        address indexed sender
    );
    event RoleAdminChanged(
        bytes32 indexed role,
        bytes32 previousAdminRole,
        bytes32 newAdminRole
    );

    modifier onlyRole(bytes32 role) {
        require(
            hasRole(role, msg.sender),
            "AccessControl: sender does not have role"
        );
        _;
    }

    constructor(
        address owner,
        address superAdmin
    ) OwnableContract(owner, superAdmin) {
        _setupRole(DEFAULT_ADMIN_ROLE, owner);
        _setupRole(OWNER_ROLE, owner);
        _setupRole(SUPER_ADMIN_ROLE, superAdmin);
    }

    function hasRole(bytes32 role, address account) public view returns (bool) {
        return _roles[role].members.contains(account);
    }

    function getRoleAdmin(bytes32 role) internal view returns (bytes32) {
        return _roles[role].adminRole;
    }

    function grantRole(
        bytes32 role,
        address account
    ) public onlyRole(getRoleAdmin(role)) {
        _grantRole(role, account);
    }

    function revokeRole(
        bytes32 role,
        address account
    ) public onlyRole(getRoleAdmin(role)) {
        _revokeRole(role, account);
    }

    function renounceRole(bytes32 role, address account) public {
        require(
            account == msg.sender,
            "AccessControl: can only renounce roles for self"
        );
        _revokeRole(role, account);
    }

    function setRoleAdmin(
        bytes32 role,
        bytes32 newAdminRole
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        bytes32 previousAdminRole = getRoleAdmin(role);
        _roles[role].adminRole = newAdminRole;
        emit RoleAdminChanged(role, previousAdminRole, newAdminRole);
    }

    function _setupRole(bytes32 role, address account) internal {
        _grantRole(role, account);
    }

    function _grantRole(bytes32 role, address account) internal {
        if (_roles[role].members.add(account)) {
            emit RoleGranted(role, account, msg.sender);
        }
    }

    function _revokeRole(bytes32 role, address account) internal {
        if (_roles[role].members.remove(account)) {
            emit RoleRevoked(role, account, msg.sender);
        }
    }

    function _changeOwner(address newOwner) internal virtual override {
        address oldOwner = getOwner();
        super._changeOwner(newOwner);
        _revokeRole(OWNER_ROLE, oldOwner);
        _grantRole(OWNER_ROLE, newOwner);
    }

    function _setSuperAdmin(address newSuperAdmin) internal virtual override {
        address oldSuperAdmin = getSuperAdmin();
        super._setSuperAdmin(newSuperAdmin);
        _revokeRole(SUPER_ADMIN_ROLE, oldSuperAdmin);
        _grantRole(SUPER_ADMIN_ROLE, newSuperAdmin);
    }
}
