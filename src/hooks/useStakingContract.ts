import { ethers } from "ethers";
import { useEffect, useState } from "react";

const useStakingContract = (contractAddress: string, contractABI: any, providerOrSigner: any) => {
    const [contract, setContract] = useState<any>(null);
  
    // Initialize the contract
    useEffect(() => {
      if (!providerOrSigner || !contractAddress || !contractABI) return;
      const stakingContract = new ethers.Contract(contractAddress, contractABI, providerOrSigner);
      setContract(stakingContract);
    }, [contractAddress, contractABI, providerOrSigner]);
  
    // Function to stake (send native currency to the contract)
    const stake = async (_poolId: any, _amount: { toString: () => string; }) => {
      if (!contract) return;
      const transaction = await contract.stake(_poolId, { value: ethers.utils.parseEther(_amount.toString()) });
      await transaction.wait();
    };
  
    // Function to claim stake from a pool
    const claimStake = async (_poolId: any) => {
      if (!contract) return;
      const transaction = await contract.claimStake(_poolId);
      await transaction.wait();
    };
  
    return { stake, claimStake };
  };
  
  export default useStakingContract;
  