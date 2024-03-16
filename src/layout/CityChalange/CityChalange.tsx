import { FC, useEffect } from 'react';

import styles from '../../styles/modules/CityButton.module.css';
import { useParams } from 'react-router-dom';
import ChallengeItem, { ChallengeItemsProps } from 'layout/HomePage/ChallengeItem';

const mockData: ChallengeItemsProps[] = [
    {
        address: '0x0',
        city: 'New York',
        amount: 100,
        duration: 30,
        chain: 'Arbitrum'
    },
    {
        address: '0x1',
        city: 'London',
        amount: 100,
        duration: 30,
        chain: 'Chiliz'
    },
    {
        address: '0x2',
        city: 'Paris',
        amount: 100,
        duration: 30,
        chain: 'Celo'
    },
    {
        address: '0x3',
        city: 'Berlin',
        amount: 100,
        duration: 30,
        chain: 'Ethereum'
    },
    {
        address: '0x4',
        city: 'Tokyo',
        amount: 100,
        duration: 30,
        chain: 'Polygon'
    },
    {
        address: '0x5',
        city: 'Moscow',
        amount: 100,
        duration: 30,
        chain: 'Binance'
    },
    {
        address: '0x6',
        city: 'Madrid',
        amount: 100,
        duration: 30,
        chain: 'Solana'
    },
    {
        address: '0x7',
        city: 'Rome',
        amount: 100,
        duration: 30,
        chain: 'Tezos'
    },
    {
        address: '0x8',
        city: 'Vienna',
        amount: 100,
        duration: 30,
        chain: 'Tron'
    },
    {
        address: '0x9',
        city: 'Athens',
        amount: 100,
        duration: 30,
        chain: 'Avalanche'
    },
    {
        address: '0x14',
        city: 'Dublin',
        amount: 100,
        duration: 30,
        chain: 'Filecoin'
    },
    {
        address: '0x15',
        city: 'Lisbon',
        amount: 100,
        duration: 30,
        chain: 'Near'
    },];


const CityChalange: FC = () => {

    const { city } = useParams()

    useEffect(() => {
        console.log(city)
    }, [city]);

 
    return (
        <div className={styles.cityContainer}>
            <div>
              Challanges
            </div>
            <div className={styles.cityItemContainer}>
                {mockData.map((challenge, index) => (
                    <ChallengeItem key={index} {...challenge} />
                ))}
            </div>
        </div>
    );
};

export default CityChalange;
