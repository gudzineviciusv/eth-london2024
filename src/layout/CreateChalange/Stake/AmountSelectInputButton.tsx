import React from 'react';

interface AmountSelectInputButtonProps {
   isAdd: boolean;
    onClick: () => void;
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '55px',
        height: '55px',
        color: '#01B574',
        background: '#e9e9e9',
        borderRadius: '100%',
        fontSize: '50px',
        cursor: 'pointer',
    },
    }

const AmountSelectInputButton: React.FC<AmountSelectInputButtonProps> = ({ isAdd, onClick }) => {
    return (
        <div onClick={onClick} style={styles.container}>
            {isAdd ? '+' : '-'}
        </div>
    );
}

export default AmountSelectInputButton;