// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.20;

import {IAxelarGasService} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import {AxelarExecutable} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import {AddressToString} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/AddressString.sol";

import './ChessNFT.sol';

contract NftHub is AxelarExecutable {
  using AddressToString for address;

  // variables
  IAxelarGasService gasReceiver;
  ChessNFT nft;

  // modifiers

  // events
  event SendNFT(address indexed _owner, uint256 indexed _tokenId, string _toChain);
  event ReceiveNFT(address indexed _owner, uint256 indexed _tokenId, string _fromChain);

  constructor(
    address _gateway,
    address _gasreceiver,
    address _chessNFT
  ) AxelarExecutable(_gateway) {
    gasReceiver = IAxelarGasService(_gasreceiver);
    nft = ChessNFT(_chessNFT);
  }

  // methods

  function sendNFT(
    uint256 _tokenId,
    string memory _destinationChain,
    address _destinationContractAddress
  ) external payable {
    require(nft.ownerOf(_tokenId) == msg.sender, "user dont have the nft");

    // transfer nft to the contract
    nft.transferFrom(msg.sender, address(this), _tokenId);

    // burn nft
    nft.burn(_tokenId);

    bytes memory payload = abi.encode(msg.sender, _tokenId);

    gasReceiver.payNativeGasForContractCall{ value: msg.value }(address(this), _destinationChain, _destinationContractAddress.toString(), payload, msg.sender);
    gateway.callContract(_destinationChain, _destinationContractAddress.toString(), payload);

    emit SendNFT(msg.sender, _tokenId, _destinationChain);
  }

  function _execute(
    string calldata sourceChain,
    string calldata ,
    bytes calldata payload
  ) internal override {
    // decoding a string
    
    (address _owner, uint256 _tokenId) = abi.decode(payload, (address, uint256));
    nft.crossMint(_owner, _tokenId);
    
    emit ReceiveNFT(_owner, _tokenId, sourceChain);
  }
}