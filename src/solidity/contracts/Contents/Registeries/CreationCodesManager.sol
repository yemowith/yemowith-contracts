// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "src/solidity/contracts/Core/Objective/Accessblity/BaseAccessControl.sol";

contract CreationCodesManager is BaseAccessControl {
    struct ContractTemplate {
        uint256 id;
        string name;
        string description;
        bytes creationCode;
    }

    ContractTemplate[] public contractTemplates;

    event ContractTemplateAdded(
        uint256 indexed id,
        string name,
        string description
    );

    /**
     * @dev Add a new contract template
     * @param name The name of the contract template
     * @param description The description of the contract template
     * @param creationCode The creation code of the contract template
     */
    function addContractTemplate(
        string memory name,
        string memory description,
        bytes memory creationCode
    ) external onlyRole(ADMIN_ROLE) {
        uint256 id = contractTemplates.length;
        contractTemplates.push(
            ContractTemplate(id, name, description, creationCode)
        );
        emit ContractTemplateAdded(id, name, description);
    }

    /**
     * @dev Get a contract template by its ID
     * @param templateId The ID of the contract template
     * @return The contract template
     */
    function getContractTemplate(
        uint256 templateId
    ) external view returns (ContractTemplate memory) {
        require(
            templateId < contractTemplates.length,
            "Template ID out of range"
        );
        return contractTemplates[templateId];
    }
}
