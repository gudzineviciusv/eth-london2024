import { FC } from 'react';
import ChallengeItem, { ChallengeItemsProps } from './ChallengeItem';

import styles from '../../styles/modules/ChallengeButton.module.css';
import SeeAllButton from './SeeAllButton';
import { useNavigate } from 'react-router-dom';

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
    }

];

const HomePage: FC = () => {
    const navigate = useNavigate();

    const handleSeeAllClick = () => {
        navigate(`/city-select`)
    }
 
    return (
        <div className={styles.challengeContainer}>
            <div className={styles.challengeHeader}>Challenge your friend and win his stake!</div>
            <div className={styles.challengesSeeAll}>
                <div className={styles.challengesText}>Challenges</div>
                <SeeAllButton onClick={() => handleSeeAllClick()}/>
            </div>
            <div className={styles.ChallengeItemContainer}>
                {mockData.map((challenge, index) => (
                    <ChallengeItem key={index} {...challenge} />
                ))}
            </div>
            <div className={styles.createChallengeButton}>+ Create a challenge</div>
            <div className={styles.howDoesItWorkHeader}>How does it work?</div>
            <div className={styles.howDoesItWorkItem}>
                <div className={styles.howDoesItWorkContainer}>
                    <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 1</div>
                    <div className={styles.howDoesItWorkItemText}>Create a challenge</div>
                    <div className={styles.howDoesItWorkGreenSubtext}>or select from available ones</div>
                </div>
                <div className={styles.nextStepArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="30" viewBox="0 0 3 30" fill="none">
                <path d="M1.5 0V30" stroke="#01B574" stroke-width="2"/>
                </svg>
                </div>
                <div className={styles.howDoesItWorkContainer}>
                    <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 1</div>
                    <div className={styles.howDoesItWorkItemText}>Create a challenge</div>
                    <div className={styles.howDoesItWorkGreenSubtext}>or select from available ones</div>
                </div>
                <div className={styles.nextStepArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="30" viewBox="0 0 3 30" fill="none">
                <path d="M1.5 0V30" stroke="#01B574" stroke-width="2"/>
                </svg>
                </div>
                <div className={styles.howDoesItWorkContainer}>
                    <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 1</div>
                    <div className={styles.howDoesItWorkItemText}>Create a challenge</div>
                    <div className={styles.howDoesItWorkGreenSubtext}>or select from available ones</div>
                </div>
            </div>
            <div className={styles.greenLineBreak}></div>
            <div className={styles.ourTeamContainer}>
            <div className={styles.ourTeamHeader}>Our Team</div>
            </div>
        </div>
    );
};

export default HomePage;
