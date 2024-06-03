// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solc/contracts/Core/Objective/Accessblity/BaseAccessControl.sol";

contract BaseRegistry is BaseAccessControl {
    struct RegistryItem {
        bool isActive;
        string description; // Additional dynamic data can be added here
        bytes encodedData; // Encoded data for flexible storage
    }

    // Mapping of item addresses to their details
    mapping(address => RegistryItem) public registryItems;

    // Event for item registration and status changes
    event ItemRegistered(
        address indexed item,
        bool isActive,
        string description,
        bytes encodedData
    );
    event ItemStatusChanged(address indexed item, bool isActive);

    // Define roles for registry management
    bytes32 public constant REGISTRY_MANAGER_ROLE =
        keccak256("REGISTRY_MANAGER_ROLE");

    // Address of the BaseRegisterable contract
    address public baseRegisterableAddress;

    // Constructor to initialize the management contract
    constructor(address _baseRegisterableAddress) {
        baseRegisterableAddress = _baseRegisterableAddress;
        _initialize();
    }

    // Internal function to register a new item with additional encoded data
    function _registerItem(
        address item,
        string memory description,
        bytes memory data
    ) internal onlyRole(REGISTRY_MANAGER_ROLE) {
        require(item != address(0), "Invalid item address");
        registryItems[item] = RegistryItem({
            isActive: true,
            description: description,
            encodedData: data
        });
        emit ItemRegistered(item, true, description, data);
    }

    // Internal function to set the activation status of an item
    function _setItemStatus(
        address item,
        bool isActive
    ) internal onlyRole(REGISTRY_MANAGER_ROLE) {
        require(
            registryItems[item].isActive != isActive,
            "Item already in this state"
        );
        registryItems[item].isActive = isActive;
        emit ItemStatusChanged(item, isActive);
    }

    // Public wrapper for registering a new item, accessible only by authorized roles
    function registerItem(
        address item,
        string memory description,
        bytes memory data
    ) public onlyRole(REGISTRY_MANAGER_ROLE) {
        _registerItem(item, description, data);
    }

    // Public wrapper for updating the status of an item, accessible only by authorized roles
    function setItemStatus(
        address item,
        bool isActive
    ) public onlyRole(REGISTRY_MANAGER_ROLE) {
        _setItemStatus(item, isActive);
    }
}
