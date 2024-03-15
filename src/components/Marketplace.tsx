import React from 'react';
import {Col, Row} from 'antd';
import MarketplaceCard from "./marketplace/MarketplaceCard";
// import useNFTMarketplace, { Listing } from "../../hooks/useMarketplace";

const Marketplace: React.FC = () => {
    // const [listings, setListings] = useState<Listing[]>([]);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { listings } = await useNFTMarketplace();
    //         setListings(listings);
    //     };
    //
    //     fetchData();
    // }, []);

    return (
        <>
            <h1>Marketplace</h1>
            <p style={{ maxWidth: '800px' }}>
                Explore Our DAO Campaigns Marketplace: Welcome to a Hub of Opportunity. Dive into Campaigns, Delve into
                Details, Purchase Unique NFTs, and Cast Your Vote to Shape the Course of Future Initiatives.
            </p>
            <Row gutter={16}>
                <Col span={8}>
                    <MarketplaceCard/>
                </Col>
            </Row>
        </>
    );
};

export default Marketplace;
