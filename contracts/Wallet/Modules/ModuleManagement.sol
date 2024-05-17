// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ModuleManagement {
    mapping(bytes4 => address) public enabledModules;
    mapping(address => bool) public authorised;

    event ModuleEnabled(bytes4 indexed sig, address indexed moduleAddress);
    event ModuleAuthorisationChanged(address indexed module, bool status);

    function enableModule(bytes4 sig, address moduleAddress) public {
        enabledModules[sig] = moduleAddress;
        emit ModuleEnabled(sig, moduleAddress);
    }

    function setAuthorisation(address module, bool status) public {
        authorised[module] = status;
        emit ModuleAuthorisationChanged(module, status);
    }
}
