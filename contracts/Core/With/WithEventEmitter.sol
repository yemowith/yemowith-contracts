// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract WithEventEmitter is BaseAccessible {
    bytes32 public constant EVENT_MANAGER_ROLE =
        keccak256("EVENT_MANAGER_ROLE");

    constructor() {
        _setupRole(EVENT_MANAGER_ROLE, msg.sender);
    }

    function _initialize(address encoderContractAddress) internal override {
        _encoderContractAddress = encoderContractAddress;
    }

    function _emitInfo(
        string memory key,
        string memory detail
    ) external override onlyRole(EVENT_MANAGER_ROLE) {
        emit InfoEvent(key, detail, msg.sender);
    }

    function _emitError(
        string memory key,
        string memory detail,
        uint errorCode
    ) external override onlyRole(EVENT_MANAGER_ROLE) {
        emit ErrorEvent(key, detail, errorCode, msg.sender);
    }

    function _emitWarning(
        string memory key,
        string memory detail
    ) external override onlyRole(EVENT_MANAGER_ROLE) {
        emit WarningEvent(key, detail, msg.sender);
    }
}
