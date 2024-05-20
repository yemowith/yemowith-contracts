// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";

contract AppliesConcepts is BaseAccessible {
    enum OperationType {
        MUL,
        PLUS,
        DIV,
        SUB
    }
    enum Mode {
        FIXED,
        PERCENT
    }

    struct Concept {
        string name;
        OperationType operationType;
        Mode mode;
        uint256 value; // For FIXED mode, this is the fixed value. For PERCENT mode, this is the percentage rate (e.g., 5 for 5%).
    }

    mapping(bytes32 => Concept) public concepts;

    event ConceptAdded(
        bytes32 indexed conceptId,
        string name,
        OperationType operationType,
        Mode mode,
        uint256 value
    );
    event ConceptApplied(
        bytes32 indexed conceptId,
        uint256 inputValue,
        uint256 outputValue
    );

    /**
     * @dev Add a new concept
     * @param conceptId The ID of the concept
     * @param name The name of the concept
     * @param operationType The type of operation (MUL, PLUS, DIV, SUB)
     * @param mode The mode of the operation (FIXED or PERCENT)
     * @param value The value for the operation
     */
    function addConcept(
        bytes32 conceptId,
        string memory name,
        OperationType operationType,
        Mode mode,
        uint256 value
    ) public onlyOwner {
        concepts[conceptId] = Concept(name, operationType, mode, value);
        emit ConceptAdded(conceptId, name, operationType, mode, value);
    }

    /**
     * @dev Initialize the contract with default concepts
     */
    function _initialize() internal {
        addConcept(
            keccak256("FIXEDCLAIM"),
            "FIXEDCLAIM",
            OperationType.PLUS,
            Mode.FIXED,
            1
        );
        addConcept(
            keccak256("PERCENTCLAIM"),
            "PERCENTCLAIM",
            OperationType.PLUS,
            Mode.PERCENT,
            1
        );
        addConcept(
            keccak256("FIXEDFEE"),
            "FIXEDFEE",
            OperationType.PLUS,
            Mode.FIXED,
            1
        );
        addConcept(
            keccak256("PERCENTFEE"),
            "PERCENTFEE",
            OperationType.PLUS,
            Mode.PERCENT,
            1
        );
    }

    /**
     * @dev Apply a concept to a given value
     * @param conceptId The ID of the concept
     * @param inputValue The input value to apply the concept to
     * @param overrideValue The value to override the concept's value
     * @return originalValue The original input value
     * @return givenValue The given input value
     * @return outputValue The output value after applying the concept
     * @return difference The difference between the output value and the input value
     */
    function applyConcept(
        bytes32 conceptId,
        uint256 inputValue,
        uint256 overrideValue
    )
        external
        returns (
            uint256 originalValue,
            uint256 givenValue,
            uint256 outputValue,
            int256 difference
        )
    {
        Concept memory concept = concepts[conceptId];
        originalValue = inputValue;
        givenValue = inputValue;
        outputValue = inputValue;

        uint256 valueToUse = overrideValue != 0 ? overrideValue : concept.value;

        if (concept.mode == Mode.FIXED) {
            if (concept.operationType == OperationType.MUL) {
                outputValue = inputValue * valueToUse;
            } else if (concept.operationType == OperationType.PLUS) {
                outputValue = inputValue + valueToUse;
            } else if (concept.operationType == OperationType.DIV) {
                require(valueToUse != 0, "Division by zero");
                outputValue = inputValue / valueToUse;
            } else if (concept.operationType == OperationType.SUB) {
                outputValue = inputValue - valueToUse;
            }
        } else if (concept.mode == Mode.PERCENT) {
            if (concept.operationType == OperationType.MUL) {
                outputValue = (inputValue * (100 + valueToUse)) / 100;
            } else if (concept.operationType == OperationType.PLUS) {} else if (
                concept.operationType == OperationType.PLUS
            ) {
                outputValue = inputValue + ((inputValue * valueToUse) / 100);
            } else if (concept.operationType == OperationType.DIV) {
                require(valueToUse != 0, "Division by zero");
                outputValue = (inputValue * 100) / (100 + valueToUse);
            } else if (concept.operationType == OperationType.SUB) {
                outputValue = inputValue - ((inputValue * valueToUse) / 100);
            }
        }

        difference = int256(outputValue) - int256(inputValue);

        emit ConceptApplied(conceptId, inputValue, outputValue);
        return (originalValue, givenValue, outputValue, difference);
    }
}
