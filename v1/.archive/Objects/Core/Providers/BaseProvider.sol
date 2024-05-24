// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ObjectWithProviders } from "../Base/ObjectWithProviders.sol";

abstract contract BaseProvider is ObjectWithProviders {
    constructor(address _owner) {
        _initialize(_owner);
    }
}
