// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Ownable {
    address private _owner;

    event OwnerChanged(address indexed oldOwner, address indexed newOwner);

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not the owner");
        _;
    }

    function getOwner() public view returns (address) {
        return _owner;
    }

    function changeOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address.");
        emit OwnerChanged(_owner, newOwner);
        _owner = newOwner;
    }
}

abstract contract Initializable is Ownable {
    bool private _initialized;

    modifier onlyInitialized() {
        require(_initialized, "Contract not initialized");
        _;
    }

    function _initialize(address owner) internal onlyOwner {
        require(!_initialized, "Contract already initialized");
        changeOwner(owner);
        _initialized = true;
    }

    function isInitialized() external view returns (bool) {
        return _initialized;
    }
}
