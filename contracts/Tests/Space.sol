// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Helpers/Executor.sol";
import "./Helpers/ContractManager.sol";

contract Space is Executor, ContractManager {
    address public _accountRegistry;
    address public _encoder;

    /*
    struct Provider {
        uint256 id;
        string url;
        uint256 chainId;
        uint256 networkId;
        string code;
        string status;
        address[] executorAccounts;
    }

    Provider[] public providers;

    event ProviderAdded(
        uint256 indexed id,
        string url,
        uint256 chainId,
        uint256 networkId
    );
    
    function addProvider(
        string memory url,
        uint256 chainId,
        uint256 networkId,
        string memory code,
        string memory status,
        address[] memory executorAccounts
    ) public {
        uint256 id = providers.length;
        providers.push(
            Provider(
                id,
                url,
                chainId,
                networkId,
                code,
                status,
                executorAccounts
            )
        );
        emit ProviderAdded(id, url, chainId, networkId);
    }

    function deployAsAccount(
        uint256 accountId,
        bytes memory bytecode
    ) public returns (address) {
        require(accountId < accounts.length, "Account does not exist");
        bytes32 salt = accounts[accountId].salt;
        return directDeploy(bytecode, salt);
    }

    function generateContract(
        uint256 accountId,
        uint256 contractCodeId
    ) public returns (address) {
        require(accountId < accounts.length, "Account does not exist");
        require(
            contractCodeId < contractsCodes.length,
            "Contract code does not exist"
        );

        bytes memory bytecode = contractsCodes[contractCodeId].bytecode;
        address contractAddress = deployAsAccount(accountId, bytecode);

        uint256 id = generatedContracts.length;
        generatedContracts.push(
            GeneratedContract(id, contractAddress, accountId, contractCodeId)
        );
        emit ContractDeployed(id, contractAddress, accountId, contractCodeId);

        return contractAddress;
    }
    */
}
