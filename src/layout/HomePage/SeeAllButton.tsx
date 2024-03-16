import React from 'react';

interface SeeAllButtonProps {
    onClick: () => void;
}

const styles = {
    seeAllLink: {
        fontSize: '20px',
        color: '#01B574',
        textDecoration: 'none',
        cursor: 'pointer',
    },
}

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ onClick }) => {
    return (
        <div style={styles.seeAllLink} onClick={onClick}>See All <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.289786 15.1306C-0.0965953 14.7442 -0.0965953 14.1178 0.289786 13.7314L6.02122 7.99998L0.289785 2.26855C-0.0965959 1.88217 -0.0965959 1.25572 0.289785 0.869338C0.676166 0.482956 1.30261 0.482956 1.68899 0.869338L7.42043 6.60077C8.19319 7.37353 8.19319 8.62643 7.42043 9.39919L1.689 15.1306C1.30261 15.517 0.676167 15.517 0.289786 15.1306Z" fill="#01B574"/>
        </svg></div>    );
}

export default SeeAllButton;