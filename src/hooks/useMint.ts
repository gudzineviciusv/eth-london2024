import { ethers } from 'ethers';

import contractAbi from '../assets/abis/mint.json';

export const contractAddresses: { [key: number]: string } = {
    5: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    534351: "0x61BEcD8eBD72fE73De9B8Be4368EeF7f78c77053",
    59140: "0x61BEcD8eBD72fE73De9B8Be4368EeF7f78c77053",
    11155111: "0xB16d8FBFaB7439C562A37378fbF276183D304B28",
};


    const mintUniqueToken = async ( amount: number, tokenURI: string, data?: string) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum as unknown as ethers.providers.ExternalProvider);
        const network = await provider.getNetwork();
        const signer: ethers.Signer | ethers.providers.Provider | undefined = provider.getSigner();

        const contract = new ethers.Contract(contractAddresses[network.chainId], contractAbi, signer);
        try {
            const dataBytes = data ? ethers.utils.toUtf8Bytes(data) : '0x';

            const mintTx = await contract.mintUniqueToken(signer.getAddress(), amount, tokenURI, dataBytes);
            const receipt = await mintTx.wait();
            const tokenId = extractTokenIdFromReceipt(receipt);

            console.log('Minting successful', mintTx.hash, tokenId);
            return { success: true, hash: mintTx.hash, tokenId: tokenId, contract: contractAddresses[network.chainId] };
        } catch (error) {
            console.error('Error minting token:', error);
            return { success: false, hash: null };
        }
    };

    const extractTokenIdFromReceipt = (receipt: { events: any; }) => {
        console.log("Receipt: ", receipt);
        for (const event of receipt.events) {
            console.log("Event: ", event);
            if (event.event === 'TransferSingle' && event.args.length > 0) {
                return event.args[3].toString();
            }
        }
        return null;
    };
    


export default mintUniqueToken;
