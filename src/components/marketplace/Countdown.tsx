import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
    const [countdown, setCountdown] = useState(4 * 24 * 60 * 60 * 1000);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1000));
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    const days = Math.floor(countdown / (24 * 60 * 60 * 1000));
    const hours = Math.floor((countdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((countdown % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((countdown % (60 * 1000)) / 1000);

    return (
        <>
            <h3 style={{marginTop: '5px', marginBottom: '10px', textAlign: 'center' }}>Time Left to Vote:</h3>
            <div className={'countdown-container'}>
                <div className={'countdown-item'}>
                    {days}
                </div>
                <div className={'countdown-colon'}>:</div>
                <div className={'countdown-item'}>
                    {hours}
                </div>
                <div className={'countdown-colon'}>:</div>
                <div className={'countdown-item'}>
                    {minutes}
                </div>
                <div className={'countdown-colon'}>:</div>
                <div className={'countdown-item'}>
                    {seconds}
                </div>
            </div>
        </>
    );
};

export default Countdown;
