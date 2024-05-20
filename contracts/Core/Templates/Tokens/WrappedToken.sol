// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "contracts/Core/Objecting/Accessblity/BaseAccessControl.sol";

contract WrappedToken is ERC20, BaseAccessControl {
    using SafeERC20 for IERC20;

    bytes32 public constant PROPOSAL_MANAGER_ROLE =
        keccak256("PROPOSAL_MANAGER_ROLE");

    IERC20 public immutable underlyingToken;

    event Deposit(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);

    struct Proposal {
        string description;
        uint256 voteCount;
        address user;
        uint256 wrappedBalance;
        uint256 underlyingBalance;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;

    /**
     * @dev Constructor function
     * @param _underlyingToken The address of the underlying ERC20 token
     * @param name The name of the wrapped token
     * @param symbol The symbol of the wrapped token
     */
    constructor(
        address _owner,
        address _underlyingToken,
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {
        underlyingToken = IERC20(_underlyingToken);

        _setupRole(PROPOSAL_MANAGER_ROLE, _owner);
    }

    /**
     * @dev Deposit underlying tokens and mint wrapped tokens
     * @param amount The amount of underlying tokens to deposit
     */
    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        underlyingToken.safeTransferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, amount);
        emit Deposit(msg.sender, amount);
    }

    /**
     * @dev Withdraw underlying tokens by burning wrapped tokens
     * @param amount The amount of wrapped tokens to withdraw
     */
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
        underlyingToken.safeTransfer(msg.sender, amount);
        emit Withdrawal(msg.sender, amount);
    }

    /**
     * @dev Get the balance of wrapped tokens for a user
     * @param user The address of the user
     * @return The balance of wrapped tokens
     */
    function wrappedBalanceOf(address user) external view returns (uint256) {
        return balanceOf(user);
    }

    /**
     * @dev Get the balance of underlying tokens for a user
     * @param user The address of the user
     * @return The balance of underlying tokens
     */
    function underlyingBalanceOf(address user) external view returns (uint256) {
        return underlyingToken.balanceOf(user);
    }

    /**
     * @dev Create a new proposal for balance confirmation
     * @param user The address of the user to confirm balances for
     */
    function createBalanceConfirmationProposal(
        address user
    ) external onlyRole(PROPOSAL_MANAGER_ROLE) {
        uint256 wrappedBalance = balanceOf(user);
        uint256 underlyingBalance = underlyingToken.balanceOf(user);
        proposals.push(
            Proposal({
                description: "Balance confirmation",
                voteCount: 0,
                user: user,
                wrappedBalance: wrappedBalance,
                underlyingBalance: underlyingBalance,
                executed: false
            })
        );
    }

    /**
     * @dev Vote for a proposal
     * @param proposalIndex The index of the proposal to vote for
     */
    function vote(uint256 proposalIndex) external {
        require(proposalIndex < proposals.length, "Invalid proposal index");
        require(!hasVoted[msg.sender], "Already voted");

        proposals[proposalIndex].voteCount += 1;
        hasVoted[msg.sender] = true;
    }

    /**
     * @dev Execute a balance confirmation proposal
     * @param proposalIndex The index of the proposal to execute
     */
    function executeBalanceConfirmationProposal(
        uint256 proposalIndex
    ) external onlyRole(PROPOSAL_MANAGER_ROLE) {
        require(proposalIndex < proposals.length, "Invalid proposal index");
        Proposal storage proposal = proposals[proposalIndex];
        require(!proposal.executed, "Proposal already executed");

        // Confirm that the balances match
        require(
            proposal.wrappedBalance == balanceOf(proposal.user),
            "Wrapped balance mismatch"
        );
        require(
            proposal.underlyingBalance ==
                underlyingToken.balanceOf(proposal.user),
            "Underlying balance mismatch"
        );

        proposal.executed = true;
    }

    /**
     * @dev Get the number of proposals
     * @return The number of proposals
     */
    function getProposalCount() external view returns (uint256) {
        return proposals.length;
    }

    /**
     * @dev Get the details of a proposal
     * @param proposalIndex The index of the proposal
     * @return The description, vote count, user, wrapped balance, underlying balance, and execution status of the proposal
     */
    function getProposal(
        uint256 proposalIndex
    )
        external
        view
        returns (string memory, uint256, address, uint256, uint256, bool)
    {
        require(proposalIndex < proposals.length, "Invalid proposal index");
        Proposal storage proposal = proposals[proposalIndex];
        return (
            proposal.description,
            proposal.voteCount,
            proposal.user,
            proposal.wrappedBalance,
            proposal.underlyingBalance,
            proposal.executed
        );
    }
}
