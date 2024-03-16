import { FC } from 'react';

import styles from '../../styles/modules/CreateChallenge.module.css';
import { useParams } from 'react-router-dom';
import StakeForm from './Stake/StakeForm';
import DestinationPicker from './Destination/DestinationPicker';
// import OtherOptions from './OtherOptions/OtherOptions';
import FinishButton from './FinishButton';

const CreateChalange: FC = () => {

    const { challenge } = useParams()
 
    return (
        <div className={styles.createContainer}>
            <div className={styles.createHeader}>Create challenge</div>
            <div className={styles.createHeader}>{challenge}</div>
            <div className={styles.createContainer}>
                <StakeForm />
                <DestinationPicker apiKey='AIzaSyD_hLQKlHtGp2EnqC-_6qi9B2mv3N_LH0M'/>
                {/* <OtherOptions /> */}
                <FinishButton />
            </div>
        </div>
    );
};

export default CreateChalange;
