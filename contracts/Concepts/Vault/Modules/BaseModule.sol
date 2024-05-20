// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract BaseModule is BaseAccessible {
    event ModuleEnabled(address indexed module);
    event ModuleDisabled(address indexed module);

    mapping(address => bool) public enabledModules;

    modifier onlyEnabledModule() {
        require(
            enabledModules[msg.sender],
            "BaseModule: caller is not an enabled module"
        );
        _;
    }

    function enableModule(
        address module
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            module != address(0),
            "BaseModule: module address cannot be zero"
        );
        enabledModules[module] = true;
        emit ModuleEnabled(module);
    }

    function disableModule(
        address module
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(enabledModules[module], "BaseModule: module is not enabled");
        enabledModules[module] = false;
        emit ModuleDisabled(module);
    }

    function isModuleEnabled(address module) external view returns (bool) {
        return enabledModules[module];
    }
}
