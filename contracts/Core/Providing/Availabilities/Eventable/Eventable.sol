// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract Eventable is BaseAccessible {
    bytes32 public constant EVENT_MANAGER_ROLE =
        keccak256("EVENT_MANAGER_ROLE");

    function _initialize(address owner) internal override {
        BaseAccessible._initialize(owner);
        _setupRole(EVENT_MANAGER_ROLE, owner);
    }

    function _addEventManager(address newManager) internal virtual {
        require(
            newManager != address(0),
            "Eventable: new manager cannot be the zero address"
        );
        _grantRole(EVENT_MANAGER_ROLE, newManager);
    }

    function _emitInfo(
        string memory key,
        bytes memory detail
    ) internal override onlyRole(EVENT_MANAGER_ROLE) {
        emit InfoEvent(key, detail, msg.sender);
    }

    function _emitError(
        string memory key,
        bytes memory detail,
        uint errorCode
    ) internal override onlyRole(EVENT_MANAGER_ROLE) {
        emit ErrorEvent(key, detail, errorCode, msg.sender);
    }

    function _emitWarning(
        string memory key,
        bytes memory detail
    ) internal override onlyRole(EVENT_MANAGER_ROLE) {
        emit WarningEvent(key, detail, msg.sender);
    }
}
