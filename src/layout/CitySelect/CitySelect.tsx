import { FC } from 'react';
import CityItem from './CityItem';

import styles from '../../styles/modules/CityButton.module.css';
import londonImage from '../../assets/images/icons/london.png';
import newYorkImage from '../../assets/images/icons/new_york.png';
import parisImage from '../../assets/images/icons/paris.png';

const mockData = [
    {
        name: "London",
        image: londonImage,
        isCommingSoon: false,
    },
    {
        name: "New York",
        image: newYorkImage,
        isCommingSoon: true,
    },
    {
        name: "Paris",
        image: parisImage,
        isCommingSoon: true,
    },
];

const CitySelect: FC = () => {
 
    return (
        <div className={styles.cityContainer}>
            <div className={styles.cityHeader}>Choose a city</div>
            <div className={styles.cityItemContainer}>
                {mockData.map((city, index) => (
                    <CityItem key={index} image={city.image} name={city.name} isCommingSoon={city.isCommingSoon} />
                ))}
            </div>
        </div>
    );
};

export default CitySelect;
