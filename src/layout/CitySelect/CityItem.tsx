import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles1 from '../../styles/modules/CityButton.module.css';
import useUniqueCollectionNFT from 'hooks/useNFTMinter';

interface CityItemsProps {
    image: string;
    name: string;
    isCommingSoon: boolean;
}

const CityItem: React.FC<CityItemsProps> = ({ image, name, isCommingSoon }) => {
    const navigate = useNavigate();
    const [minting, setMinting] = useState(false);

    const { mintUniqueToken } =  useUniqueCollectionNFT();

    const handleMint = async () => {

     try {
            setMinting(true);

                await mintUniqueToken();

                navigate(`/city/${name.toLowerCase()}`); // Redirect to the city route
                setMinting(false);

        } catch (error: any) {
            setMinting(false);
        }

        setMinting(false);
    };

    const handleClick = async () => {
        handleMint();
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
            {! minting && name} {isCommingSoon && ' - Coming Soon'}
            {minting && <div>Minting... Please confirm transaction in your wallet!</div>}
        </div>
    );
}

export default CityItem;
