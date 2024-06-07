// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    address private setter;

    event ValueChanged(uint256 newValue, address indexed setter);

    function set(uint256 newValue) public {
        value = newValue;
        setter = msg.sender;
        emit ValueChanged(newValue, msg.sender);
    }

    function get() public view returns (uint256, address) {
        return (value, setter);
    }
}
