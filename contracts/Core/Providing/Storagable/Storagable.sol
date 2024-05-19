// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../Accessblity/BaseAccessible.sol";
import "contracts/Core/Providing/Storagable/Registerable/Registerable.sol";

contract Storagable is BaseAccessible, Registerable {
    // Event for indicating successful initialization of Storagable
    event StoragableInitialized(address indexed owner);

    // Mapping to store data
    mapping(bytes32 => bytes) private storageData;

    // Constructor to initialize the Storagable contract
    constructor(address owner) {
        _initialize(owner);
    }

    // Internal function to initialize the Storagable contract
    function _initialize(
        address owner
    ) internal virtual override(BaseAccessible, Registerable) {
        BaseAccessible._initialize(owner);
        Registerable._initialize(owner);
        emit StoragableInitialized(owner);
    }

    // Function to store data
    function storeData(
        bytes32 key,
        bytes memory data
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        storageData[key] = data;
    }

    // Function to retrieve data
    function retrieveData(
        bytes32 key
    ) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (bytes memory) {
        return storageData[key];
    }

    // Function to delete data
    function deleteData(bytes32 key) public onlyRole(DEFAULT_ADMIN_ROLE) {
        delete storageData[key];
    }
}
