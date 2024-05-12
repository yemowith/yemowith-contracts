// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {BaseObject} from "../Base/BaseObject.sol";

contract BaseDefine is BaseObject {
    string public name;
    address public creator;

    constructor(string memory _name) {
        name = _name;
    }
}
