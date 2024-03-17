import { FC } from 'react';
import ChallengeItem, { ChallengeItemsProps } from './ChallengeItem';

import styles from '../../styles/modules/ChallengeButton.module.css';
import SeeAllButton from './SeeAllButton';
import { useNavigate } from 'react-router-dom';

import teamImage from '../../assets/images/team.png';
import cloverImage from '../../assets/images/clover.png';
import mapImage from '../../assets/images/map.png';
import twentyimage from '../../assets/images/twenty.png';
import pathImage from '../../assets/images/path.png';

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

const teamMembers = [
    { name: 'Vytautas Gudzinevičius', role: 'Developer' },
    { name: 'Mikas Gudzinevičius', role: 'Developer' },
    { name: 'Domas Ambrazevičius', role: 'Designer' }
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
            <div className={styles.createChallengeButton} onClick={() => navigate('/create-challenge')}>+ Create a challenge</div>
            <div className={styles.howDoesItWorkHeader}>How does it work?</div>
            <div className={styles.howDoesItWorkItem}>
                <div className={styles.howDoesItWorkContainer}>
                <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 1</div>
                <div className={styles.howDoesItWorkItemText}>Create challenge for racing in your area</div>
                <div className={styles.howDoesItWorkGreenSubtext}>or select from available ones</div>
                <img src={mapImage} alt="Clover" className={styles.cloverImage} />
                <div className={styles.nextStepArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="30" viewBox="0 0 3 30" fill="none">
                <path d="M1.5 0V30" stroke="#01B574" stroke-width="2"/>
                </svg>
                </div>
                </div>

                <div className={styles.howDoesItWorkContainer}>
                <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 2</div>
                <div className={styles.howDoesItWorkItemText}>Stake selected currency and amount for reward</div>
                <div className={styles.howDoesItWorkGreenSubtext}>and find a friend to compete with</div>
                <img src={twentyimage} alt="Clover" className={styles.cloverImage} />
                <div className={styles.nextStepArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="30" viewBox="0 0 3 30" fill="none">
                <path d="M1.5 0V30" stroke="#01B574" stroke-width="2"/>
                </svg>
                </div>
                </div>

                <div className={styles.howDoesItWorkContainer}>
                <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 3</div>
                <div className={styles.howDoesItWorkItemText}>Get random coordinates of the destination</div>
                <div className={styles.howDoesItWorkGreenSubtext}>and start the race!</div>
                <img src={pathImage} alt="Clover" className={styles.cloverImage} />
                <div className={styles.nextStepArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="30" viewBox="0 0 3 30" fill="none">
                <path d="M1.5 0V30" stroke="#01B574" stroke-width="2"/>
                </svg>
                </div>
                </div>

                <div className={styles.howDoesItWorkContainer}>
                <div className={styles.howDoesItWorkStepnumberTopLeftButton}>Step 4</div>
                <div className={styles.howDoesItWorkItemText}>Win friend’s stake if you reach the destination first!</div>
                <img src={cloverImage} alt="Clover" className={styles.cloverImage} />
                </div>
                <div className={styles.nextStepArrow}>
                </div>

            </div>
            <div className={styles.greenLineBreak}></div>
            <div className={styles.ourTeamContainer}>
            <div className={styles.ourTeamHeader}>Our Team</div>
            <img src={teamImage} alt="Our Team" className={styles.ourTeamImage} />
            <div className={styles.ourTeamMembers}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.ourTeamMember}>
                            <div>{member.name}</div>
                            <div className={styles.smallPrint}>{member.role}</div>
                        </div>
                    ))}
                </div>       
            </div>
        </div>
    );
};

export default HomePage;
