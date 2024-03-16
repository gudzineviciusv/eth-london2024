import React from 'react';

interface OtherOptionsProps {
    header: string;
    buttonLeft: string;
    buttonRight: string;
    isLeftCommingSoon: boolean;
    isRightCommingSoon: boolean;
    setOtherOptions: () => void;
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '12px',
        overflow: 'hidden',
        padding: '10px',
    } as React.CSSProperties,
    header: {
        fontSize: '18px',
        textAlign: 'left',
        width: '100%',
    } as React.CSSProperties,
    selectedButton: {
        fontSize: '22px',
        color: 'white',
        background: '#01B574',
        cursor: 'pointer',
        borderRadius: '12px',
        width: '50%',
        dispplay: 'flex',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commingSoonButton: {
        fontSize: '22px',
        cursor: 'not-allowed',
        borderRadius: '12px',
    },
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
        width: '100%',

    }
}

const OtherOptionsPicker: React.FC<OtherOptionsProps> = ({ setOtherOptions, header, buttonLeft, buttonRight, isLeftCommingSoon, isRightCommingSoon }) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>{header}</div>
            <div style={styles.buttonsWrapper}>
                <div style={styles.selectedButton} onClick={() => setOtherOptions()}>
                    <div>{buttonLeft}</div>
                    {isLeftCommingSoon && <div>Comming soon</div>}
                </div>
                <div style={styles.commingSoonButton}>
                    <div>{buttonRight}</div>
                    {isRightCommingSoon && <div>Comming soon</div>}
                </div>
            </div>
        </div>
    );
}

export default OtherOptionsPicker;