// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

contract LauncherDAO {
    struct Proposal {
        string description;
        address contractAddress;
        uint256 voteCount;
    }

    struct Campaign {
        uint256 startTime;
        uint256 submissionEndTime;
        uint256 votingEndTime;
        Proposal[] proposals;
        mapping(address => bool) votes;
        bool executed;
        address winningContract;
    }

    IERC1155 public nft;
    address public owner;
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount = 0;
    uint256 public quorum = 3; // For simplicity, the quorum is set to 3 votes

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyNFTOwner() {
        require(nft.balanceOf(msg.sender, 1) > 0, "Only NFT owners can call this function"); // Assuming token ID 1
        _;
    }


    constructor(address nftAddress) {
        owner = msg.sender;
        nft = IERC1155(nftAddress);
    }

    function createCampaign(uint256 duration, uint256 votingPeriod) external onlyOwner {
        Campaign storage campaign = campaigns[campaignCount];
        campaign.startTime = block.timestamp;
        campaign.submissionEndTime = block.timestamp + duration;
        campaign.votingEndTime = block.timestamp + duration + votingPeriod;
        campaign.executed = false;
        campaign.winningContract = address(0);

        campaignCount++;
    }

    function submitProposal(uint256 campaignId, string memory description, address contractAddress) external onlyNFTOwner {
        Campaign storage campaign = campaigns[campaignId];
        require(block.timestamp >= campaign.startTime && block.timestamp <= campaign.submissionEndTime, "Not in submission period");
        
        campaign.proposals.push(Proposal({
            description: description,
            contractAddress: contractAddress,
            voteCount: 0
        }));
    }

    function vote(uint256 campaignId, uint256 proposalId) external onlyNFTOwner {
        Campaign storage campaign = campaigns[campaignId];
        require(block.timestamp > campaign.submissionEndTime && block.timestamp <= campaign.votingEndTime, "Not in voting period");
        require(!campaign.votes[msg.sender], "Already voted in this campaign");

        campaign.votes[msg.sender] = true;
        campaign.proposals[proposalId].voteCount++;
    }

    function executeCampaign(uint256 campaignId) external {
        Campaign storage campaign = campaigns[campaignId];
        require(block.timestamp > campaign.votingEndTime, "Voting period has not ended");
        require(!campaign.executed, "Campaign already executed");

        address winningContract = address(0);
        uint256 highestVotes = 0;

        for (uint i = 0; i < campaign.proposals.length; i++) {
            if (campaign.proposals[i].voteCount > highestVotes) {
                highestVotes = campaign.proposals[i].voteCount;
                winningContract = campaign.proposals[i].contractAddress;
            }
        }

        require(highestVotes >= quorum, "Not enough votes for any proposal");
        
        campaign.executed = true;
        campaign.winningContract = winningContract;
    }

    function getWinningContract(uint256 campaignId) external view returns (address) {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.executed, "Campaign not executed yet");
        return campaign.winningContract;
    }
}
