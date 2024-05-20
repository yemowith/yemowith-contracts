// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Ownablity/OwnableContract.sol"; // Adjust the path as necessary based on your project structure

abstract contract Initializable is OwnableContract {
    bool private _initialized;

    modifier onlyInitialized() {
        require(_initialized, "Contract not initialized");
        _;
    }

    function _initialize(address owner) internal virtual onlyOwner {
        require(!_initialized, "Contract already initialized");
        _changeOwner(owner); // Use the internal function from Ownable
        _initialized = true;
    }

    function isInitialized() internal view returns (bool) {
        return _initialized;
    }
}
