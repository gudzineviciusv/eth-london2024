import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/modules/ChallengeButton.module.css';

export interface ChallengeItemsProps {
    address: string;
    city: string;
    amount: number;
    duration: number;
    chain: string;
}

const styles1 = {
    container: {
        height: '100px', 
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        marginBottom: '10px',
        padding: '20px',
    } as const,
    amountWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    } as const,
    infoWrapper: {
        display: 'flex',
        fontSize: '12px',
        gap: '20px',
    } as const,
    imageStyle: {
        height: '40px',
        width: '40px',
        borderRadius: '100%',
    },
    amountText: {
        color: '#000',
        fontSize: '34px',
        fontWeight: 600,
    }
}


const ChallengeItem: React.FC<ChallengeItemsProps> = ({ address, city, amount, duration, chain }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/mission/${address}`);
    };

    const getImageFromChain = () => {
        if (chain === 'Arbitrum') {
            return 'https://cryptologos.cc/logos/arbitrum-arb-logo.png';
        } else if (chain === 'Chiliz') {
            return 'https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png';
        } else if (chain === 'Celo') {
            return 'https://cryptocurrencyjobs.co/startups/assets/logos/celo.jpg';
        } else if (chain === 'Ethereum'){
            return 'https://cryptologos.cc/logos/ethereum-eth-logo.png';
        } else if (chain === 'Polygon') {
            return 'https://cryptologos.cc/logos/polygon-matic-logo.png';
        } else if (chain === 'Solana') {
            return 'https://cryptologos.cc/logos/solana-sol-logo.png';
        } else if (chain === 'Binance') {
            return 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png';
        } else if (chain === 'Tezos') {
            return 'https://cryptologos.cc/logos/tezos-xtz-logo.png';
        } else if (chain === 'Avalanche') {
            return 'https://cryptologos.cc/logos/avalanche-avax-logo.png';
        } else if (chain === 'Fantom') {
            return 'https://cryptologos.cc/logos/fantom-ftm-logo.png';
        } else if (chain === 'Harmony') {
            return 'https://cryptologos.cc/logos/harmony-one-logo.png';
        } else if (chain === 'Kusama') {
            return 'https://cryptologos.cc/logos/kusama-ksm-logo.png';
        } else if (chain === 'Polkadot') {
            return 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png';
        } else if (chain === 'Terra') {
            return 'https://cryptologos.cc/logos/terra-luna-logo.png';
        } else if (chain === 'Tron') {
            return 'https://cryptologos.cc/logos/tron-trx-logo.png';
        } else if (chain === 'Waves') {
            return 'https://cryptologos.cc/logos/waves-waves-logo.png';
        }
        else {
            return 'https://cryptologos.cc/logos/solana-sol-logo.png';
        }
    }

    return (
        <div style={styles1.container} className={styles.challengeItem} onClick={handleClick}>
            <div style={styles1.amountWrapper}>
                <div style={styles1.amountText}>{`$${amount}`}</div>
                <div style={styles1.infoWrapper}>
                    <div>{city}</div>
                    <div>{`${duration} min`}</div>
                    <div>{chain}</div>
                </div>
            </div>
            <img style={styles1.imageStyle} src={getImageFromChain()} alt='chain'/>
        </div>
    );
}

export default ChallengeItem;
