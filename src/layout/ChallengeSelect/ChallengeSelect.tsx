import { FC } from 'react';
import ChallengeItem from './ChallengeItem';

import styles from '../../styles/modules/ChallengeButton.module.css';

const mockData = [
    {
        name: "123",
        isCommingSoon: false,
    },
    {
        name: "Los 321",
        isCommingSoon: true,
    },
    {
        name: "11 Francisco",
        isCommingSoon: true,
    },
];

const HomePage: FC = () => {
 
    return (
        <div className={styles.challengeContainer}>
            <div className={styles.challengeHeader}>Challenge your friend and win his stake!</div>
            <div className={styles.challengesSeeAll}>
                <div className={styles.challengesText}>Challenges</div>
                <div className={styles.seeAllLink}>See All <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.289786 15.1306C-0.0965953 14.7442 -0.0965953 14.1178 0.289786 13.7314L6.02122 7.99998L0.289785 2.26855C-0.0965959 1.88217 -0.0965959 1.25572 0.289785 0.869338C0.676166 0.482956 1.30261 0.482956 1.68899 0.869338L7.42043 6.60077C8.19319 7.37353 8.19319 8.62643 7.42043 9.39919L1.689 15.1306C1.30261 15.517 0.676167 15.517 0.289786 15.1306Z" fill="#01B574"/>
                </svg></div>
            </div>
            <div className={styles.ChallengeItemContainer}>
                {mockData.map((challenge, index) => (
                    <ChallengeItem key={index} name={challenge.name} />
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
