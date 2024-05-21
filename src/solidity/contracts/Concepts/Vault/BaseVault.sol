// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PairsManager.sol";
import "contracts/Core/Objective/Accessblity/BaseAccessControl.sol";
import "contracts/Core/Security/CustomReentrancyGuard.sol";

/*
contract InsuranceToken is IERC20 {
    constructor(
        string memory name,
        string memory symbol
    ) IERC20(name, symbol) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        _burn(from, amount);
    }
}
*/
contract BaseVault is BaseAccessControl, CustomReentrancyGuard {
    /*
    PairsManager public pairsManager;
    mapping(uint256 => InsuranceToken) public insuranceBaseTokens;
    mapping(uint256 => InsuranceToken) public insuranceQuoteTokens;

    event VaultInitialized(address indexed owner);

    struct DepositInfo {
        uint256 amount;
        uint256 timestamp;
    }

    struct WithdrawalInfo {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => mapping(uint256 => DepositInfo[])) public deposits;
    mapping(address => mapping(uint256 => WithdrawalInfo[])) public withdrawals;

    function _initialize(
        address owner
    ) internal virtual override(BaseAccessible) {
        super._initialize(owner);
        emit VaultInitialized(owner);
    }

    function setInsuranceTokens(
        uint256 pairId,
        InsuranceToken _insuranceBaseToken,
        InsuranceToken _insuranceQuoteToken
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        insuranceBaseTokens[pairId] = _insuranceBaseToken;
        insuranceQuoteTokens[pairId] = _insuranceQuoteToken;
    }

    function _depositBaseToken(uint256 amount, uint256 pairId) internal {
        (IERC20 baseToken, ) = pairsManager.getPair(pairId);
        require(
            baseToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        insuranceBaseTokens[pairId].mint(msg.sender, amount);
        _saveDeposit(msg.sender, pairId, amount);
    }

    function _depositQuoteToken(uint256 amount, uint256 pairId) internal {
        (, IERC20 quoteToken) = pairsManager.getPair(pairId);
        require(
            quoteToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        insuranceQuoteTokens[pairId].mint(msg.sender, amount);
        _saveDeposit(msg.sender, pairId, amount);
    }

    function _withdrawBaseToken(uint256 amount, uint256 pairId) internal {
        (IERC20 baseToken, ) = pairsManager.getPair(pairId);
        insuranceBaseTokens[pairId].burn(msg.sender, amount);
        require(baseToken.transfer(msg.sender, amount), "Transfer failed");
        _saveWithdrawal(msg.sender, pairId, amount);
    }

    function _withdrawQuoteToken(uint256 amount, uint256 pairId) internal {
        (, IERC20 quoteToken) = pairsManager.getPair(pairId);
        insuranceQuoteTokens[pairId].burn(msg.sender, amount);
        require(quoteToken.transfer(msg.sender, amount), "Transfer failed");
        _saveWithdrawal(msg.sender, pairId, amount);
    }

    function lock(uint256 numberOfBlocks) external onlyRole(LOCKER_ROLE) {
        _lock(numberOfBlocks);
    }

    function unlock() external onlyRole(LOCKER_ROLE) {
        _unlock();
    }

    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _lock(uint256 numberOfBlocks) internal virtual override {
        // Implement lock logic here
    }

    function _unlock() internal virtual override {
        // Implement unlock logic here
    }

    function _saveDeposit(
        address user,
        uint256 pairId,
        uint256 amount
    ) internal {
        deposits[user][pairId].push(DepositInfo(amount, block.timestamp));
    }

    function _saveWithdrawal(
        address user,
        uint256 pairId,
        uint256 amount
    ) internal {
        withdrawals[user][pairId].push(WithdrawalInfo(amount, block.timestamp));
    }

    */
}
