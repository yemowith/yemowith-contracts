// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Objective/Accessblity/BaseAccessControl.sol";
import "contracts/Core/Templates/Proxies/Proxy.sol";

contract ContractManager is BaseAccessControl {
    bytes32 public constant DEPLOYER_ROLE = keccak256("DEPLOYER_ROLE");

    struct ContractCode {
        uint256 id;
        string contractType;
        bytes encodedBytecode;
        string code;
    }

    struct GeneratedProxedContract {
        uint256 id;
        address proxyAddress;
        address impltAddress;
        uint256 contractCodeId;
    }

    ContractCode[] public contractsCodes;
    GeneratedProxedContract[] public generatedProxedContracts;

    bytes32 private salt;

    event ContractCodeAdded(
        uint256 indexed id,
        string contractType,
        string code
    );
    event ProxedContractDeployed(
        uint256 indexed id,
        address proxyAddress,
        address impltAddress,
        uint256 contractCodeId
    );

    constructor(address owner) BaseAccessControl() {}

    function addContractCode(
        string memory contractType,
        bytes memory bytecode,
        string memory code
    ) external whenLockedOrPaused onlyRole(ADMIN_ROLE) {
        bytes memory encodedBytecode = _encode(bytecode, salt);
        uint256 id = contractsCodes.length;
        contractsCodes.push(
            ContractCode(id, contractType, encodedBytecode, code)
        );
        emit ContractCodeAdded(id, contractType, code);
    }

    function getContractCode(
        uint256 contractCodeId
    ) external view onlyRole(DEPLOYER_ROLE) returns (ContractCode memory) {
        require(
            contractCodeId < contractsCodes.length,
            "Contract code does not exist"
        );
        return contractsCodes[contractCodeId];
    }

    function directDeploy(
        bytes memory bytecode,
        bytes32 _salt
    ) internal returns (address) {
        address addr;
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }
        return addr;
    }

    function proxyedDeploy(
        uint256 contractCodeId,
        bytes32 _salt
    ) external whenLockedOrPaused onlyRole(DEPLOYER_ROLE) returns (address) {
        require(
            contractCodeId < contractsCodes.length,
            "Contract code does not exist"
        );

        // Decode the contract code
        bytes memory encodedBytecode = contractsCodes[contractCodeId]
            .encodedBytecode;
        bytes memory bytecode = _decode(encodedBytecode, salt);

        // Deploy the contract code temporarily
        address impltAddress;
        assembly {
            impltAddress := create(0, add(bytecode, 0x20), mload(bytecode))
            if iszero(extcodesize(impltAddress)) {
                revert(0, 0)
            }
        }

        // Deploy the Proxy contract with the implementation address
        bytes memory proxyBytecode = type(Proxy).creationCode;
        bytes memory proxyInitCode = abi.encodePacked(
            proxyBytecode,
            abi.encode(impltAddress)
        );
        address proxyAddress = directDeploy(proxyInitCode, _salt);

        // Store the generated proxy contract details
        uint256 id = generatedProxedContracts.length;
        generatedProxedContracts.push(
            GeneratedProxedContract(
                id,
                proxyAddress,
                impltAddress,
                contractCodeId
            )
        );
        return proxyAddress;
    }

    function _encode(
        bytes memory data,
        bytes32 _salt
    ) private pure returns (bytes memory) {
        return abi.encodePacked(data, _salt);
    }

    function _decode(
        bytes memory data,
        bytes32 _salt
    ) private pure returns (bytes memory) {
        require(data.length >= 32, "Invalid data length");
        bytes32 dataSalt;
        assembly {
            dataSalt := mload(add(data, mload(data)))
        }
        require(dataSalt == _salt, "Invalid salt");
        bytes memory decodedData = new bytes(data.length - 32);
        for (uint256 i = 0; i < decodedData.length; i++) {
            decodedData[i] = data[i];
        }
        return decodedData;
    }
}
