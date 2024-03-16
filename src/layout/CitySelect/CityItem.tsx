import React from 'react';

interface CityItemsProps {
    image: string;
    name: string;
    isCommingSoon: boolean;
}

const CityItem: React.FC<CityItemsProps> = ({ image, name, isCommingSoon }) => {
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
        <div style={style}>
            {name} {isCommingSoon && ' - Coming Soon'}
        </div>
    );
}

export default CityItem;
