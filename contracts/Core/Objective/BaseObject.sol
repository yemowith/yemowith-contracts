// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../libraries/Factories/BaseFactory.sol";
import "./Accessblity/BaseAccessControl.sol";

contract BaseObject is BaseAccessControl, BaseFactory {
    function initialize(
        address owner,
        address superAdmin,
        address admin
    ) public override initializer {
        BaseAccessControl.initialize(owner, superAdmin, admin);
    }
}
