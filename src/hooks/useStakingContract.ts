import { ethers } from "ethers";
import contractAbi from "../assets/abis/staking.json";

const chilizSpicyTestnetID = 88882;
const arbitrumOneID = 42161;
const celoID = 44787;

export const stakingAddresses: { [key: number]: string } = {
    [chilizSpicyTestnetID]: "0xFEB5B03A501f808b6E2ed717421012A7549098f5",
    [arbitrumOneID]: "0x1d26E3356Bcb6E69c9B7558cc265DCFa5b11eC22",
    [celoID]: "0xB16d8FBFaB7439C562A37378fbF276183D304B28",
};

const useStakingContract = () => {
  
    // Function to stake (send native currency to the contract)
    const stake = async (_poolId: any, _amount: { toString: () => string; }) => {
        try {
        const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
        const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();
        const network = await provider.getNetwork();
        const currentAddress = stakingAddresses[network.chainId];
        const contract = new ethers.Contract(currentAddress, contractAbi, signer);
      if (!contract) return;
      const transaction = await contract.stake(_poolId, { value: ethers.utils.parseEther(_amount.toString()) });
      await transaction.wait();
        } catch (error: any) {
            console.error("Error staking:", error);
            throw error;
        }
    };
  
    // Function to claim stake from a pool
    const claimStake = async (_poolId: any) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
        const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();
        const network = await provider.getNetwork();
        const currentAddress = stakingAddresses[network.chainId];
        const contract = new ethers.Contract(currentAddress, contractAbi, signer);
      if (!contract) return;
      const transaction = await contract.claimStake(_poolId);
      await transaction.wait();
    };
  
    return { stake, claimStake };
  };
  
  export default useStakingContract;
  