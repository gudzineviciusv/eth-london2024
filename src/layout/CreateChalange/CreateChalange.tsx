import { FC } from 'react';

import styles from '../../styles/modules/CityButton.module.css';
import { useParams } from 'react-router-dom';
import StakeForm from './Stake/StakeForm';
import DestinationPicker from './Destination/DestinationPicker';
import OtherOptions from './OtherOptions/OtherOptions';
import FinishButton from './FinishButton';

const CreateChalange: FC = () => {

    const { city } = useParams()
 
    return (
        <div className={styles.cityContainer}>
            <div>
                <div className={styles.cityHeader}>Create chalange</div>
                <div className={styles.cityHeader}>{city}</div>
            </div>
            <div className={styles.cityItemContainer}>
                <StakeForm />
                <DestinationPicker apiKey='AIzaSyD_hLQKlHtGp2EnqC-_6qi9B2mv3N_LH0M'/>
                <OtherOptions />
                <FinishButton />
            </div>
        </div>
    );
};

export default CreateChalange;
