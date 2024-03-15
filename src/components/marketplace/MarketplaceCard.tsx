import React, {useState} from 'react';
import {Button, Card} from 'antd';
import ViewCampaign from "../campaigns/partials/ViewCampaign";
import Countdown from "./Countdown";
import {useAccount} from "wagmi";
import {useWeb3Modal} from '@web3modal/wagmi/react';

const styles = {
    card: {
        margin: '10px',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
        padding: '3px',
        border: '1px solid #c3c3c3'
    },
    button: {
        height: "40px",
        padding: "0 20px",
        textAlign: "center",
        fontWeight: "600",
        letterSpacing: "0.2px",
        fontSize: "15px",
        margin: "10px 5px",
        border: "none",
    },
} as const;

const MarketplaceCard: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {isConnected} = useAccount();
    const {open} = useWeb3Modal();

    const handleViewCampaignClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card title="Rainbow Eater Badge" bordered={true} style={styles.card}>
                <p style={{marginTop: 0, textAlign: 'center'}}>Earned by eating at least 5 different colored fruits and
                    vegetables for 5 consecutive days.</p>
                <img
                    src={'https://gateway.pinata.cloud/ipfs/QmWuhN98BQaPQ7XXed9GzMZuvTsyithNAgYVcKFBNgazsi/50b6ad6a-83f2-43a8-8df9-b39ea6aa83d6.png?fbclid=IwAR1T_xxPFHkuh0Km0YGFwGmpvKtey8LFDrWFR2OI0filBz2LYccB6wwgh7g'}
                    alt={'Rainbow Eater Badge'}
                    title={"Rainbow Eater Badge"}
                    style={styles.image}/>
                <Countdown/>
                {isConnected ? (
                    <div style={{textAlign: 'center', marginTop: '15px'}}>
                        <h2 style={{ marginBottom: 0 }}>Price: 1.25 SEP</h2>
                        <Button shape="round" type="default" onClick={handleViewCampaignClick} style={styles.button}>
                            More Details
                        </Button>
                        <Button shape="round" type="primary" onClick={handleViewCampaignClick} style={styles.button}>
                            Purchase
                        </Button>
                    </div>
                ) : (
                    <div style={{textAlign: 'center', marginTop: '15px'}}>
                        <Button shape="round" type="primary" style={styles.button} onClick={() => open()}>
                            Connect to Vote
                        </Button>
                    </div>
                )}
            </Card>
            <ViewCampaign isVisible={isModalVisible} onClose={handleModalClose}/>
        </>
    );
}
export default MarketplaceCard;
