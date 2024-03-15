// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract UniqueCollectionNFT is ERC1155, Ownable {
    using Strings for uint256;

    string baseURI;
    uint256 public nextTokenId;
    mapping(uint256 => string) private tokenURIs;

    constructor(string memory initialBaseURI) ERC1155("") Ownable(msg.sender) {
        baseURI = initialBaseURI;
        nextTokenId = 1;
    }

    function setTokenURI(uint256 tokenId, string memory newTokenURI) internal {
        tokenURIs[tokenId] = newTokenURI;
    }

    function setBaseURI(string memory newBaseUrl) public onlyOwner {
        baseURI = newBaseUrl;
    }

    function _baseURI() internal view returns (string memory) {
        return baseURI;
    }

    function mintUniqueToken(address to, uint256 amount, string memory tokenURI, bytes memory data) public onlyOwner {
        uint256 currentTokenId = nextTokenId;
        _mint(to, currentTokenId, amount, data);
        setTokenURI(currentTokenId, tokenURI);
        nextTokenId++;
    }

    function uri(uint256 tokenId) override public view returns (string memory) {
        require(tokenId < nextTokenId, "ERC1155: URI query for nonexistent token");
        string memory base = _baseURI();
        return bytes(base).length > 0 ? string(abi.encodePacked(base, tokenId.toString())) : "";
    }
}
