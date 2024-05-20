// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Objecting/Accessblity/BaseAccessControl.sol";

contract GatewaysManagement is BaseAccessControl {
    /*
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    struct Node {
        address nodeAddress;
        string nodeName;
    }

    struct Provider {
        string providerName;
        Node[] nodes;
    }

    mapping(address => Provider) public providers;
    address[] public providerList;

    event ProviderAdded(address indexed providerAddress, string providerName);
    event NodeAdded(
        address indexed providerAddress,
        address nodeAddress,
        string nodeName
    );

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    function addProvider(
        address providerAddress,
        string memory providerName
    ) external onlyRole(ADMIN_ROLE) {
        require(
            bytes(providers[providerAddress].providerName).length == 0,
            "Provider already exists"
        );
        providers[providerAddress].providerName = providerName;
        providerList.push(providerAddress);
        emit ProviderAdded(providerAddress, providerName);
    }

    function addNode(
        address providerAddress,
        address nodeAddress,
        string memory nodeName
    ) external onlyRole(ADMIN_ROLE) {
        require(
            bytes(providers[providerAddress].providerName).length != 0,
            "Provider does not exist"
        );
        providers[providerAddress].nodes.push(Node(nodeAddress, nodeName));
        emit NodeAdded(providerAddress, nodeAddress, nodeName);
    }

    function getProviderNodes(
        address providerAddress
    ) external view returns (Node[] memory) {
        return providers[providerAddress].nodes;
    }

    function getProviders() external view returns (address[] memory) {
        return providerList;
    }

    */
}
