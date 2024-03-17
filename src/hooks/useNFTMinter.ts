import { ethers } from 'ethers';
import contractAbi from '../assets/abis/nftMinter.json';

const chilizSpicyTestnetID = 88882;
const arbitrumOneID = 42161;
const celoID = 44787;



export const nftMinterAddresses: { [key: number]: string } = {
    [chilizSpicyTestnetID]: "0xB16d8FBFaB7439C562A37378fbF276183D304B28",
    [arbitrumOneID]: "0xE17254586D5869Cd68446aC20D4E55A40E8B1707",
    [celoID]: "0xFEB5B03A501f808b6E2ed717421012A7549098f5",
};

const useUniqueCollectionNFT = () => {

  const mintUniqueToken = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
    const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();
    const network = await provider.getNetwork();
    const currentAddress = nftMinterAddresses[network.chainId];
    const contract = new ethers.Contract(currentAddress, contractAbi, signer);
    const tokenURI = "https://fuchsia-forward-spoonbill-510.mypinata.cloud/ipfs/QmYfaATm3VuCrYnJtteZn7obxat9woYKvWYGQh9RPZSbfC";
    if (!contract) throw new Error("Contract is not initialized");
    try {
      const transaction = await contract.mintUniqueToken(signer.getAddress() , 1, tokenURI, { value: 500000000000000 });
      await transaction.wait();
      return transaction;
    } catch (error) {
      console.error("Error minting token:", error);
      throw error;
    }
  };

  // Function to set base URI
  const setBaseURI = async (newBaseUrl: any) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
    const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();
    const network = await provider.getNetwork();
    const currentAddress = nftMinterAddresses[network.chainId];
    const contract = new ethers.Contract(currentAddress, contractAbi, signer);
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
    const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
    const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();
    const network = await provider.getNetwork();
    const currentAddress = nftMinterAddresses[network.chainId];
    const contract = new ethers.Contract(currentAddress, contractAbi, signer);
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
