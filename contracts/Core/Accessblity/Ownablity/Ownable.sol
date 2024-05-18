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

    // Renamed and visibility set to internal
    function _changeOwner(address newOwner) internal onlyOwner {
        require(newOwner != address(0), "Invalid new owner address.");
        emit OwnerChanged(_owner, newOwner);
        _owner = newOwner;
    }
}
