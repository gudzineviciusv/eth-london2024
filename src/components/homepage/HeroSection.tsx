import React from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";
import styles from "../../styles/modules/HeroSection.module.css";

const HeroSection: React.FC = () => {
    return (
        <>
            <header className={styles.masthead}>
                <div className={styles.mastheadContent}>
                    <h1 className={styles.mastheadHeading}>TODO</h1>
                    <p className={styles.mastheadSubheading}>
                        Empowering Earth and Enabling Change through NFTs. <br/>Influence conservation projects'
                        direction via DAO voting participation.</p>
                    <Button shape="round" type="default" className={styles.mastheadButton}>
                        <Link to="/marketplace">Check Marketplace</Link>
                    </Button>
                </div>
                <div className={`${styles.backgroundCircle} ${styles.backgroundCircle1}`}></div>
                <div className={`${styles.backgroundCircle} ${styles.backgroundCircle2}`}></div>
                <div className={`${styles.backgroundCircle} ${styles.backgroundCircle3}`}></div>
            </header>
        </>
    )
}

export default HeroSection;
