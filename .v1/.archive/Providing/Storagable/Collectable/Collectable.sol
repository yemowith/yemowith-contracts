// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Storagable.sol";

contract Collectable is Storagable {
    // Event for indicating successful initialization of Collectable
    event CollectableInitialized(address indexed owner);

    // Mapping to store collection data
    mapping(bytes32 => bytes[]) private collectionData;

    // Constructor to initialize the Collectable contract
    constructor(address owner) {
        _initialize(owner);
    }

    // Internal function to initialize the Collectable contract
    function _initialize(address owner) internal virtual override(Storagable) {
        Storagable._initialize(owner);
        emit CollectableInitialized(owner);
    }

    // Function to add data to a collection
    function addToCollection(
        bytes32 key,
        bytes memory data
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        collectionData[key].push(data);
    }

    // Function to retrieve data from a collection by index
    function retrieveFromCollection(
        bytes32 key,
        uint256 index
    ) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (bytes memory) {
        require(index < collectionData[key].length, "Index out of bounds");
        return collectionData[key][index];
    }

    // Function to delete data from a collection by index
    function deleteFromCollection(
        bytes32 key,
        uint256 index
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(index < collectionData[key].length, "Index out of bounds");
        uint256 lastIndex = collectionData[key].length - 1;
        collectionData[key][index] = collectionData[key][lastIndex];
        collectionData[key].pop();
    }

    // Function to get the length of a collection
    function getCollectionLength(
        bytes32 key
    ) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256) {
        return collectionData[key].length;
    }
}
