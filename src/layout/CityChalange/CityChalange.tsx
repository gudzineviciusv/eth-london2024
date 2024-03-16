import { FC, useState, useEffect } from 'react';
import styles from '../../styles/modules/CityButton.module.css';
import { useParams } from 'react-router-dom';
import ChallengeItem, { ChallengeItemsProps } from 'layout/HomePage/ChallengeItem';

export interface Challenge {
    creator_wallet: string;
    opponent_wallet: string;
    target_geolocation: string;
    creation_date: string;
    network: string;
    crypto_currency: string;
    time_to_target: number;
    is_public: boolean;
}


const CityChalange: FC = () => {
    const { city } = useParams();
    const [challenges, setChallenges] = useState<ChallengeItemsProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://mikasguu.pythonanywhere.com/challenges`);
                if (!response.ok) {
                    throw new Error('Failed to fetch challenges');
                }
                const data = await response.json();
                const transformedChallenges = data.map((challenge: Challenge) => ({
                    address: challenge.creator_wallet,
                    city: 'London',
                    amount: challenge.crypto_currency,
                    duration: challenge.time_to_target,
                    chain: challenge.network,
                }));
                setChallenges(transformedChallenges);
            } catch (error) {
                console.error('Error fetching challenges:', error);
            }
        };

        fetchData();
    }, [city]);

    return (
        <div className={styles.cityContainer}>
            <div>
                Challenges in {city}
            </div>
            <div className={styles.cityItemContainer}>
                {challenges.map((challenge, index) => (
                    console.log(challenge),
                    <ChallengeItem key={index} {...challenge} />
                ))}
            </div>
        </div>
    );
};

export default CityChalange;
