// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarketplace is ERC1155Holder, ReentrancyGuard {
    struct Listing {
        address seller;
        address tokenAddress;
        uint256 tokenId;
        uint256 amount;
        uint256 price;
    }

    Listing[] public listings;

    event Listed(address indexed seller, address indexed tokenAddress, uint256 indexed tokenId, uint256 amount, uint256 price);
    event Purchased(address indexed buyer, address indexed tokenAddress, uint256 indexed tokenId, uint256 amount, uint256 price);

    function listNFT(address tokenAddress, uint256 tokenId, uint256 amount, uint256 price) public {
        IERC1155 token = IERC1155(tokenAddress);
        require(token.balanceOf(msg.sender, tokenId) >= amount, "Insufficient token balance");
        require(token.isApprovedForAll(msg.sender, address(this)), "Marketplace not approved");

        Listing memory listing = Listing({
            seller: msg.sender,
            tokenAddress: tokenAddress,
            tokenId: tokenId,
            amount: amount,
            price: price
        });

        listings.push(listing);
        emit Listed(msg.sender, tokenAddress, tokenId, amount, price);
    }

    function purchaseNFT(uint256 listingIndex, uint256 amount) public payable nonReentrant {
        Listing memory listing = listings[listingIndex];
        require(amount <= listing.amount, "Insufficient amount in listing");
        uint256 totalCost = listing.price * amount;
        require(msg.value == totalCost, "Incorrect value");

        IERC1155 token = IERC1155(listing.tokenAddress);
        token.safeTransferFrom(listing.seller, msg.sender, listing.tokenId, amount, "");

        payable(listing.seller).transfer(totalCost);

        // Update the listing or remove it if all tokens are sold
        if (listing.amount == amount) {
            // Remove the listing
            listings[listingIndex] = listings[listings.length - 1];
            listings.pop();
        } else {
            listings[listingIndex].amount -= amount;
        }

        emit Purchased(msg.sender, listing.tokenAddress, listing.tokenId, amount, totalCost);
    }

    function getAllListings() public view returns (Listing[] memory) {
        return listings;
    }
}
