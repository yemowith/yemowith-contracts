// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleFactory {
    struct ContractForFactory {}
    address[] public contracts;

    function createContract(address _contract) public {
        contracts.push(_contract);
    }

    function getContracts() public view returns (address[] memory) {
        return contracts;
    }

    function getContract(uint256 index) public view returns (address) {
        return contracts[index];
    }
}
