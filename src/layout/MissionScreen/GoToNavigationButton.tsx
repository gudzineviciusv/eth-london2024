import useStakingContract from 'hooks/useStakingContract';
import React from 'react';

const styles = {
    container: {
        display: 'flex',
        width: '300px', // Width of the button
        height: '60px', // Height of the button
        color: 'white',
        background: '#01B574',
        fontSize: '22px',
        cursor: 'pointer',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        position: 'absolute',
        bottom: '100px', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust position to account for button dimensions
    } as React.CSSProperties,
}

const GoToNavigationButton: React.FC = () => {
    const { claimStake } = useStakingContract();

    const handleClaim = async () => {
        await claimStake();
    }
    return (
        <div style={styles.container} onClick={handleClaim}>
            Claim your stake
        </div>
    );
}

export default GoToNavigationButton;
