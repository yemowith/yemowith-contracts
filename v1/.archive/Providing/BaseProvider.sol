// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solidity/contracts/Core/Providing/Storagable/Storagable.sol";
import "src/solidity/contracts/Core/Providing/Storagable/Collectable/Collectable.sol";
import "src/solidity/contracts/Core/Providing/Storagable/Indexable/Indexable.sol";

contract BaseProvider is Storagable, Collectable, Indexable {
    // Event for indicating successful initialization of BaseProvider
    event BaseProviderInitialized(address indexed owner);

    // Constructor to initialize the BaseProvider contract
    constructor(address owner) {
        _initialize(owner);
    }

    // Internal function to initialize the BaseProvider contract
    function _initialize(
        address owner
    ) internal virtual override(Storagable, Collectable, Indexable) {
        Storagable._initialize(owner);
        Collectable._initialize(owner);
        Indexable._initialize(owner);
        emit BaseProviderInitialized(owner);
    }
}
