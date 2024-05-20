// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Accessblity/BaseAccessible.sol";
import "contracts/Interfaces/ERC20/IERC20.sol";

contract PairsManager is BaseAccessible {
    struct TokenPair {
        IERC20 baseToken;
        IERC20 quoteToken;
    }

    TokenPair[] public tokenPairs;

    event PairAdded(
        uint256 indexed pairId,
        address baseToken,
        address quoteToken
    );

    function addPair(IERC20 baseToken, IERC20 quoteToken) external onlyOwner {
        tokenPairs.push(TokenPair(baseToken, quoteToken));
        emit PairAdded(
            tokenPairs.length - 1,
            address(baseToken),
            address(quoteToken)
        );
    }

    function getPair(uint256 pairId) external view returns (IERC20, IERC20) {
        require(pairId < tokenPairs.length, "Pair does not exist");
        TokenPair storage pair = tokenPairs[pairId];
        return (pair.baseToken, pair.quoteToken);
    }
}
