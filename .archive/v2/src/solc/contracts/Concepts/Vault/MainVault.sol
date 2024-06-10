// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { BaseVault } from "./BaseVault.sol";

contract MainVault is BaseVault {
    /*
    event Deposit(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 pairId
    );
    event Withdraw(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 pairId
    );

    constructor() {}

    function _initialize(
        address owner,
        PairsManager _pairsManager
    ) internal override(BaseVault) {
        super._initialize(owner);
        pairsManager = _pairsManager;
    }

    function deposit(uint256 amount, uint256 pairId) external nonReentrant {
        (IERC20 baseToken, IERC20 quoteToken) = pairsManager.getPair(pairId);
        if (msg.sender == address(baseToken)) {
            _depositBaseToken(amount, pairId);
        } else if (msg.sender == address(quoteToken)) {
            _depositQuoteToken(amount, pairId);
        } else {
            revert("Invalid token address");
        }
    }

    function withdraw(uint256 amount, uint256 pairId) external nonReentrant {
        (IERC20 baseToken, IERC20 quoteToken) = pairsManager.getPair(pairId);
        if (msg.sender == address(baseToken)) {
            _withdrawBaseToken(amount, pairId);
        } else if (msg.sender == address(quoteToken)) {
            _withdrawQuoteToken(amount, pairId);
        } else {
            revert("Invalid token address");
        }
    }

    */
}
