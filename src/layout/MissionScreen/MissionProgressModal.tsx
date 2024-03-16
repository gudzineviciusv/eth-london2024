import ProgressLine from "./ProgressLine";

const styles = {
    container: {
        display: 'flex',
        width: '347px', // Width of the button
        background: 'white',
        fontSize: '22px',
        cursor: 'pointer',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '12px',
        position: 'absolute',
        top: '150px',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Adjust position to account for button dimensions
        padding: '14px',
        boxShadow: '0px 10px 12px 0px rgba(0, 0, 0, 0.20)',
        flexDirection: 'column',
    } as React.CSSProperties,
    amount: {
        color: '#F00',
        textAlign: 'center',
        fontSize: '40px',
        lineHeight: '100%' 
    } as React.CSSProperties,
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    text: {
        color: '#000',
        fontSize: '12px',
        fontWeight: 400
    },
    percents: {
        color: '#000',
        fontSize: '22px',
        fontWeight: 400
    },
    progressBarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'px',
    },
}

const MissionProgressModal: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.infoWrapper}>
                <div>
                    <div style={styles.text}>Oponnet</div>
                    <div style={styles.percents}>87%</div>
                </div>
                <div style={styles.amount}>$20</div>
                <div>
                    <div style={styles.text}>You</div>
                    <div style={styles.percents}>40%</div>
                </div>
            </div>
            <div style={styles.progressBarContainer}>
                <ProgressLine progress={87} isWining={true} isLeft/>
                <ProgressLine progress={40} isWining={false} />
            </div>
        </div>
    );
}

export default MissionProgressModal;
