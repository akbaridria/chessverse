// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ChessNFT is ERC721URIStorage {
    string TOKEN_URI;
    uint256 internal tokenId;

    constructor(string memory _tokenUri) ERC721("ChessNFT", "CNFT") {
      TOKEN_URI = _tokenUri;
    }

    function mint(address to) public {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }

    function crossMint(
      address _to,
      uint256 _tokenId
    ) external {
      _safeMint(_to, _tokenId);
      _setTokenURI(_tokenId, TOKEN_URI);
    }

    function burn(uint256 _tokenId) public {
       _burn(_tokenId);
    }
    
}