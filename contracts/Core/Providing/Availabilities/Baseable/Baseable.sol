// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";
import "contracts/Core/Accessblity/Statusability/Statusable.sol";

contract Baseable is BaseAccessible, Statusable {
    bytes32 private _mainRole;

    event RoleGranted(bytes32 indexed role, address indexed account);

    constructor(bytes32 role) {
        _mainRole = role;
    }

    function _initializeBaseable(address owner) internal {
        BaseAccessible._initialize(owner);
        Statusable._initialize(owner);
        _setupRole(_mainRole, owner);
    }

    function _addRoleMember(address newMember) internal {
        require(
            newMember != address(0),
            "Baseable: new member cannot be the zero address"
        );
        _grantRole(_mainRole, newMember);
        emit RoleGranted(_mainRole, newMember);
    }

    function getMainRole() external view returns (bytes32) {
        return _mainRole;
    }


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
