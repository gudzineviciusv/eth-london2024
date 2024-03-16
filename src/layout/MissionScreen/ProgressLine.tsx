import React from 'react';

interface Props {
    progress: number;
    isWining: boolean;
    isLeft?: boolean;
}

const ProgressLine: React.FC<Props> = ({ progress, isWining, isLeft }) => {

        const style = {
            container: {
                width: '100%',
                height: '10px',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                borderRight: isLeft ? '1px solid #000' : 'none',
            },
            bar: {
                height: '4px',
                width: `${progress}%`,
                background: isWining ? '#01B574' : '#000',
            }
        }

    return (
        <div style={style.container}>
            <div style={style.bar}></div>
        </div>
    );
}

export default ProgressLine;