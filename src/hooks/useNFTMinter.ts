import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const useUniqueCollectionNFT = (contractAddress: string, contractABI: any, signerOrProvider: any) => {
  const [contract, setContract] = useState<any>(null);

  // Initialize the contract
  useEffect(() => {
    if (!signerOrProvider || !contractAddress || !contractABI) return;
    const newContract = new ethers.Contract(contractAddress, contractABI, signerOrProvider);
    setContract(newContract);
  }, [contractAddress, contractABI, signerOrProvider]);

  // Function to mint a new token
  const mintUniqueToken = async (to: any, amount: any, tokenURI: any, mintFee: any) => {
    if (!contract) throw new Error("Contract is not initialized");
    try {
      const transaction = await contract.mintUniqueToken(to, amount, tokenURI, { value: mintFee });
      await transaction.wait();
      return transaction;
    } catch (error) {
      console.error("Error minting token:", error);
      throw error;
    }
  };

  // Function to set base URI
  const setBaseURI = async (newBaseUrl: any) => {
    if (!contract) throw new Error("Contract is not initialized");
    try {
      const transaction = await contract.setBaseURI(newBaseUrl);
      await transaction.wait();
      return transaction;
    } catch (error) {
      console.error("Error setting base URI:", error);
      throw error;
    }
  };

  // Function to set mint fee
  const setMintFee = async (newMintFee: any) => {
    if (!contract) throw new Error("Contract is not initialized");
    try {
      const transaction = await contract.setMintFee(newMintFee);
      await transaction.wait();
      return transaction;
    } catch (error) {
      console.error("Error setting mint fee:", error);
      throw error;
    }
  };

  return {
    mintUniqueToken,
    setBaseURI,
    setMintFee,
  };
};

export default useUniqueCollectionNFT;
