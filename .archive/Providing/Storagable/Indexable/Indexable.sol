// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";
import "../Storagable.sol";

contract Indexable is BaseAccessible, Storagable {
    // Event for indicating successful initialization of Indexable
    event IndexableInitialized(address indexed owner);

    // Mapping to store index data
    mapping(bytes32 => uint256) private indexData;

    // Constructor to initialize the Indexable contract
    constructor(address owner) {
        _initialize(owner);
    }

    // Internal function to initialize the Indexable contract
    function _initialize(
        address owner
    ) internal virtual override(BaseAccessible, Storagable) {
        BaseAccessible._initialize(owner);
        Storagable._initialize(owner);
        emit IndexableInitialized(owner);
    }

    // Function to store index data
    function storeIndexData(
        bytes32 key,
        uint256 data
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        indexData[key] = data;
    }

    // Function to retrieve index data
    function retrieveIndexData(
        bytes32 key
    ) public view onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256) {
        return indexData[key];
    }

    // Function to delete index data
    function deleteIndexData(bytes32 key) public onlyRole(DEFAULT_ADMIN_ROLE) {
        delete indexData[key];
    }
}
