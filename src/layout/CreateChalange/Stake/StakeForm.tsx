import React from 'react';
import CurrencyPicker from './CurrancyPicker';
import AmountSelect from './AmountSelect';
import PreselectAmountButton from './PreselectAmountButton';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
} as const;

const StakeForm: React.FC = () => {
    const [amount, setAmount] = React.useState(0);

    return (
        <div style={styles.container}>
            <CurrencyPicker />
            <AmountSelect amount={amount} setAmount={setAmount}/>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                <PreselectAmountButton amount={1} onClick={setAmount} />
                <PreselectAmountButton amount={10} onClick={setAmount} />
                <PreselectAmountButton amount={20} onClick={setAmount} />
                <PreselectAmountButton amount={50} onClick={setAmount} />
            </div>
        </div>
    );
}

export default StakeForm;