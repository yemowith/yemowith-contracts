// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "contracts/Core/Utils/ContextContract.sol"; // Updated import path

abstract contract AccessControl is
    ContextContract,
    ERC165 // Inheriting from ContextContract
{
    using EnumerableSet for EnumerableSet.AddressSet;
    using Strings for uint256;

    struct RoleData {
        EnumerableSet.AddressSet members;
        bytes32 adminRole;
    }

    mapping(bytes32 => RoleData) private _roles;

    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;

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
        _checkRole(role, _msg_Sender()); // Using _msg_Sender() from ContextContract
        _;
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC165).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function hasRole(bytes32 role, address account) public view returns (bool) {
        return _roles[role].members.contains(account);
    }

    function getRoleAdmin(bytes32 role) public view returns (bytes32) {
        return _roles[role].adminRole;
    }

    function _grantRole(
        bytes32 role,
        address account
    ) internal virtual onlyRole(getRoleAdmin(role)) {
        if (_roles[role].members.add(account)) {
            emit RoleGranted(role, account, _msg_Sender());
        }
    }

    function _revokeRole(
        bytes32 role,
        address account
    ) internal virtual onlyRole(getRoleAdmin(role)) {
        if (_roles[role].members.remove(account)) {
            emit RoleRevoked(role, account, _msg_Sender());
        }
    }

    function _renounceRole(bytes32 role, address account) internal virtual {
        require(
            account == _msg_Sender(),
            "AccessControl: can only renounce roles for self"
        );
        _revokeRole(role, account);
    }

    function _setupRole(bytes32 role, address account) internal virtual {
        _grantRole(role, account);
    }

    function _setRoleAdmin(
        bytes32 role,
        bytes32 newAdminRole
    ) internal virtual {
        bytes32 previousAdminRole = getRoleAdmin(role);
        _roles[role].adminRole = newAdminRole;
        emit RoleAdminChanged(role, previousAdminRole, newAdminRole);
    }

    function _checkRole(bytes32 role, address account) internal view {
        require(
            hasRole(role, account),
            "AccessControl: account does not have role"
        );
    }
}
