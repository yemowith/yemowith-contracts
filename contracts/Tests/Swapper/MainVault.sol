// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PairsManager.sol";

contract InsuranceToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        _burn(from, amount);
    }
}

contract MainVault is Ownable {
    PairsManager public pairsManager;
    uint256 public pairId;
    InsuranceToken public insuranceBaseToken;
    InsuranceToken public insuranceQuoteToken;

    event Deposit(address indexed user, address indexed token, uint256 amount);
    event Withdraw(address indexed user, address indexed token, uint256 amount);

    constructor(
        PairsManager _pairsManager,
        uint256 _pairId,
        InsuranceToken _insuranceBaseToken,
        InsuranceToken _insuranceQuoteToken
    ) {
        pairsManager = _pairsManager;
        pairId = _pairId;
        insuranceBaseToken = _insuranceBaseToken;
        insuranceQuoteToken = _insuranceQuoteToken;
    }

    function depositBaseToken(uint256 amount) external {
        (IERC20 baseToken, ) = pairsManager.getPair(pairId);
        require(
            baseToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        insuranceBaseToken.mint(msg.sender, amount);
        emit Deposit(msg.sender, address(baseToken), amount);
    }

    function depositQuoteToken(uint256 amount) external {
        (, IERC20 quoteToken) = pairsManager.getPair(pairId);
        require(
            quoteToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
        insuranceQuoteToken.mint(msg.sender, amount);
        emit Deposit(msg.sender, address(quoteToken), amount);
    }

    function withdrawBaseToken(uint256 amount) external {
        (IERC20 baseToken, ) = pairsManager.getPair(pairId);
        insuranceBaseToken.burn(msg.sender, amount);
        require(baseToken.transfer(msg.sender, amount), "Transfer failed");
        emit Withdraw(msg.sender, address(baseToken), amount);
    }

    function withdrawQuoteToken(uint256 amount) external {
        (, IERC20 quoteToken) = pairsManager.getPair(pairId);
        insuranceQuoteToken.burn(msg.sender, amount);
        require(quoteToken.transfer(msg.sender, amount), "Transfer failed");
        emit Withdraw(msg.sender, address(quoteToken), amount);
    }
}
