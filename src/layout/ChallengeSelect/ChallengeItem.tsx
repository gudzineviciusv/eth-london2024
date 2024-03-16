import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/modules/ChallengeButton.module.css';

interface ChallengeItemsProps {
    name: string;
}

const ChallengeItem: React.FC<ChallengeItemsProps> = ({ name }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/challenge/${name.toLowerCase()}`);
    };

    const style = {
        height: '100px', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    };

    return (
        <div style={style} className={styles.challengeItem} onClick={handleClick}>
            {name}
        </div>
    );
}

export default ChallengeItem;
