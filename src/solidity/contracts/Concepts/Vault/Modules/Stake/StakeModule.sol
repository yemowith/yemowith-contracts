// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/Core/Objective/Accessblity/BaseAccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakeModule is BaseAccessControl {
    IERC20 public stakingToken;
    uint256 public totalStaked;
    mapping(address => uint256) public stakedBalances;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);

    constructor(IERC20 _stakingToken) {
        stakingToken = _stakingToken;
    }

    function stake(uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(amount > 0, "Cannot stake 0 tokens");
        require(
            stakingToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );

        stakedBalances[msg.sender] += amount;
        totalStaked += amount;

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(amount > 0, "Cannot unstake 0 tokens");
        require(stakedBalances[msg.sender] >= amount, "Insufficient balance");

        stakedBalances[msg.sender] -= amount;
        totalStaked -= amount;
        require(stakingToken.transfer(msg.sender, amount), "Transfer failed");

        emit Unstaked(msg.sender, amount);
    }

    function getStakedBalance(address account) external view returns (uint256) {
        return stakedBalances[account];
    }
}
