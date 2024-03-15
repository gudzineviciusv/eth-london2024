import React from 'react';
import {Button, Col, Row} from 'antd';
import CampaignCard from "./campaigns/partials/CampaignCard";
import {useAccount} from "wagmi";
import {useWeb3Modal} from '@web3modal/wagmi/react';

const styles = {
    button: {
        height: "40px",
        padding: "0 20px",
        textAlign: "center",
        fontWeight: "600",
        letterSpacing: "0.2px",
        fontSize: "15px",
        border: "none",
        color: "white",
        marginTop: "20px",
    },
} as const;

const Campaigns: React.FC = () => {
    const {isConnected} = useAccount();
    const {open} = useWeb3Modal();

    return (
        <>
            <h1>My Campaigns</h1>
            <p style={{maxWidth: '800px'}}>
                Discover, Create, and Share: Navigate Your Personal DAO Campaigns Marketplace. Browse, Craft, and
                Showcase Your Initiatives. Submit and Witness Your Unique Campaigns Influence the Collective Vision.
            </p>
            {isConnected ? (
                <Row gutter={16}>
                    <Col span={8}>
                        <CampaignCard/>
                    </Col>
                </Row>
            ) : (
                <div style={{textAlign: 'left'}}>
                    <Button shape="round" type="primary" style={styles.button} onClick={() => open()}>
                        Connect Wallet
                    </Button>
                </div>
            )}
        </>
    );
};
export default Campaigns;
