// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PairsManager.sol";

contract TokenSwapper is Ownable {
    PairsManager public pairsManager;
    uint256 public pairId;
    uint256 public rate; // rate of BaseToken to QuoteToken

    event Swap(
        address indexed user,
        address indexed tokenIn,
        address indexed tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );

    constructor(PairsManager _pairsManager, uint256 _pairId, uint256 _rate) {
        pairsManager = _pairsManager;
        pairId = _pairId;
        rate = _rate;
    }

    function swapBaseForQuote(uint256 amount) external {
        (IERC20 baseToken, IERC20 quoteToken) = pairsManager.getPair(pairId);
        require(
            baseToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        uint256 amountOut = amount * rate;
        require(quoteToken.transfer(msg.sender, amountOut), "Transfer failed");
        emit Swap(
            msg.sender,
            address(baseToken),
            address(quoteToken),
            amount,
            amountOut
        );
    }

    function swapQuoteForBase(uint256 amount) external {
        (IERC20 baseToken, IERC20 quoteToken) = pairsManager.getPair(pairId);
        require(
            quoteToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        uint256 amountOut = amount / rate;
        require(baseToken.transfer(msg.sender, amountOut), "Transfer failed");
        emit Swap(
            msg.sender,
            address(quoteToken),
            address(baseToken),
            amount,
            amountOut
        );
    }

    function setRate(uint256 _rate) external onlyOwner {
        rate = _rate;
    }
}
