import React from 'react';
import AmountSelectInputButton from './AmountSelectInputButton';

interface AmountSelectProps {
    amount: number;
    setAmount: (amount: number) => void;
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'white',
        padding: '10px',
    },
    amount: {
        fontSize: '32px',
    }
}

const AmountSelect: React.FC<AmountSelectProps> = ({ amount, setAmount }) => {
    return (
        <div style={styles.container}>
            <AmountSelectInputButton isAdd={true} onClick={() => setAmount(amount + 1)} />
            <div style={styles.amount}>{`$${amount}`}</div>
            <AmountSelectInputButton isAdd={false} onClick={() => setAmount(amount - 1)} />
        </div>
    );
}

export default AmountSelect;