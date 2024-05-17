// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {BaseObject} from "./BaseObject.sol";

abstract contract BasicObject is BaseObject {
    address private _baseEncoder;
    address private _baseDeployer;

    constructor() {}
}
