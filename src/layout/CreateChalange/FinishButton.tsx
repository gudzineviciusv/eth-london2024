import React from 'react';


const styles = {
    container: {
        padding: '10px',
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
    const handleClick = () => {
        // Hardcoded data
        const data = {
            creator_wallet: 'creator_wallet_value',
            opponent_wallet: 'opponent_wallet_value',
            creation_date: new Date().toISOString(),
            network: 'network_value',
            crypto_currency: '$100',
            time_to_target: 10, 
            is_public: true, 
        };

        fetch('https://mikasguu.pythonanywhere.com/challenge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Challenge created successfully:', data);
        })
        .catch(error => {
            console.error('Error creating challenge:', error);
        });
    };

    return (
        <div style={styles.container} onClick={handleClick}>
            Create and stake
        </div>
    );
}

export default FinishButton;
