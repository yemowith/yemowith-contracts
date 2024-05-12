// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {BaseObject} from "./BaseObject.sol";
import {BaseDefine} from "../Defines/BaseDefine.sol"; // Import the BaseDefine contract

abstract contract ObjectWithProviders is BaseObject {
    // Define a struct to hold BaseDefine objects and their associated details
    struct DefineEntry {
        BaseDefine defineObject;
        address creator;
    }

    // List to store all DefineEntry records
    DefineEntry[] public defines;

    // Function to create a new BaseDefine object and add it to the list
    function createDefine(string memory _name) public {
        BaseDefine newDefine = new BaseDefine(_name); // Create a new BaseDefine object
        defines.push(
            DefineEntry({defineObject: newDefine, creator: msg.sender})
        ); // Add the new object to the list with the creator's address
    }

    // Function to get the total number of defines
    function getDefineCount() public view returns (uint) {
        return defines.length;
    }

    // Function to get a define's details by index
    function getDefineByIndex(
        uint index
    ) public view returns (BaseDefine, address) {
        require(index < defines.length, "Index out of bounds");
        DefineEntry storage entry = defines[index];
        return (entry.defineObject, entry.creator);
    }
}
