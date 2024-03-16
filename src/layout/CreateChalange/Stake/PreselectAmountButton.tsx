import React from 'react';

interface PreselectAmountButtonProps {
    amount: number;
    onClick: (number: number) => void;
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75px',
        height: '55px',
        background: 'white',
        fontSize: '22px',
        cursor: 'pointer',
        borderRadius: '12px',
    },
}

const PreselectAmountButton: React.FC<PreselectAmountButtonProps> = ({ amount, onClick }) => {
    return (
        <div onClick={() => onClick(amount)} style={styles.container}>
            ${amount}
        </div>
    );
}

export default PreselectAmountButton;
