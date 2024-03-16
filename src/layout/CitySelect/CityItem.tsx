import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles1 from '../../styles/modules/CityButton.module.css';

interface CityItemsProps {
    image: string;
    name: string;
    isCommingSoon: boolean;
}

const CityItem: React.FC<CityItemsProps> = ({ image, name, isCommingSoon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cities/${name.toLowerCase()}`); // Redirect to the city route
    };

    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'white',
        borderWith: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '15px',
    };

    return (
        <div style={style} className={styles1.cityItem} onClick={handleClick}>
            {name} {isCommingSoon && ' - Coming Soon'}
        </div>
    );
}

export default CityItem;
