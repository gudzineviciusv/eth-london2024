import React from 'react';

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '60px',
        color: 'white',
        background: '#01B574',
        fontSize: '22px',
        cursor: 'pointer',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
    } as React.CSSProperties,
}

const FinishButton: React.FC = () => {
    return (
        <div style={styles.container}>
            Create and stake
        </div>
    );
}

export default FinishButton;
