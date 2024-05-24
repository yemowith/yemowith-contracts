// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solidity/contracts/Core/Accessblity/BaseAccessible.sol";

contract Registerable is BaseAccessible {
    // Mapping to store addresses of different registry contracts
    mapping(bytes32 => address) public registries;

    // Event for registry creation and updates
    event RegistryCreated(
        bytes32 indexed registryType,
        address registryAddress
    );

    // Define roles for management
    bytes32 public constant REGISTRIES_MANAGER_ROLE =
        keccak256("REGISTRIES_MANAGER_ROLE");

    // Internal function to initialize the management contract
    function _initialize(address owner) internal virtual {
        Providable._initializeProvidable(owner);
        (owner); // Initialize the providable contract
        _setupRole(DEFAULT_ADMIN_ROLE, owner); // Assign the default admin role to the owner
        _setupRole(REGISTRIES_MANAGER_ROLE, owner); // Assign the registries manager role to the owner
    }

    // Internal function to create a new registry
    function _createRegistry(
        bytes32 registryType,
        address registryImplementation
    ) internal virtual {
        require(
            registries[registryType] == address(0),
            "Registry type already exists"
        );
        registries[registryType] = registryImplementation;
        emit RegistryCreated(registryType, registryImplementation);
    }

    // Internal function to update an existing registry
    function _updateRegistry(
        bytes32 registryType,
        address newRegistryImplementation
    ) internal virtual {
        require(
            registries[registryType] != address(0),
            "Registry type does not exist"
        );
        registries[registryType] = newRegistryImplementation;
        emit RegistryCreated(registryType, newRegistryImplementation);
    }
}
