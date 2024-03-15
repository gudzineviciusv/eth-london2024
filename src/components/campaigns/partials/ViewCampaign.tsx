import React from 'react';
import {Modal, Card} from 'antd';

interface ViewCampaignProps {
    isVisible: boolean;
    onClose: () => void;
}

const ViewCampaign: React.FC<ViewCampaignProps> = ({isVisible, onClose}) => {
    return (
        <>
            <Modal
                title="Campaign Title"
                visible={isVisible}
                onOk={onClose}
                onCancel={onClose}
                okText={'Purchase'}
                width={600}
            >
                <Card>
                    <p>
                        <strong>End Date:</strong> February 1, 2023
                    </p>
                    <p>
                        <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        <strong>NFT Count:</strong> 10,000
                    </p>
                    <p>
                        <strong>IPFS metadata:</strong> https://example.com
                    </p>
                </Card>
            </Modal>
        </>
    );
};

export default ViewCampaign;
