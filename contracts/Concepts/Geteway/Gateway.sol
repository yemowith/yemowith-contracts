// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GatewaysManagement.sol";

contract Gateway {
    /*
    GatewayManagement public gatewayManagement;

    event TransactionReceived(address indexed from, uint256 amount, bytes data);
    event TransactionRegistered(
        address indexed provider,
        address indexed node,
        bytes data
    );
    event TransactionConfirmed(
        address indexed provider,
        address indexed node,
        bytes data
    );
    event TransactionExecuted(
        address indexed provider,
        address indexed node,
        bytes data
    );

    constructor(address _gatewayManagement) {
        gatewayManagement = GatewayManagement(_gatewayManagement);
    }

    function receiveTransaction(bytes memory data) external payable {
        emit TransactionReceived(msg.sender, msg.value, data);
        _registerTransaction(data);
    }

    function _registerTransaction(bytes memory data) internal {
        address[] memory providers = gatewayManagement.getProviders();
        for (uint256 i = 0; i < providers.length; i++) {
            GatewayManagement.Node[] memory nodes = gatewayManagement
                .getProviderNodes(providers[i]);
            for (uint256 j = 0; j < nodes.length; j++) {
                emit TransactionRegistered(
                    providers[i],
                    nodes[j].nodeAddress,
                    data
                );
            }
        }
    }

    function confirmTransaction(
        address provider,
        address node,
        bytes memory data
    ) external {
        emit TransactionConfirmed(provider, node, data);
        _executeTransaction(provider, node, data);
    }

    function _executeTransaction(
        address provider,
        address node,
        bytes memory data
    ) internal {
        emit TransactionExecuted(provider, node, data);
        // Implement the logic to execute the transaction
    }

    */
}
