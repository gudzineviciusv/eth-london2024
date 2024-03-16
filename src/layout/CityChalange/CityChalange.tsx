import { FC } from 'react';

import styles from '../../styles/modules/CityButton.module.css';
import { useParams } from 'react-router-dom';

const CityChalange: FC = () => {

    const { city } = useParams()
 
    return (
        <div className={styles.cityContainer}>
            <div>
                <div className={styles.cityHeader}>{city}</div>
                <div className={styles.cityHeader}>{city}</div>
            </div>
            <div className={styles.cityItemContainer}>
            </div>
        </div>
    );
};

export default CityChalange;
