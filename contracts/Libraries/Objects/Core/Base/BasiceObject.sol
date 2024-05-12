// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {BaseObject} from "./BaseObject.sol";

abstract contract BasiceObject is BaseObject {
    string public name;
    address public creator;

    constructor(string memory _name) {
        name = _name;
    }
}
