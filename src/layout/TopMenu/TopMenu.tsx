import { FC } from "react";
import { Button, Layout } from "antd";
import { useWindowWidthAndHeight } from "hooks";
import { Link } from "react-router-dom";
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from "wagmi";

const { Header } = Layout;

const styles = {
    header: {
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#f5f5f5",
        paddingTop: "15px",
        zIndex: 2,
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
    headerRight: {
        display: "flex",
        alignItems: "center",
        paddingRight: "10px",
        fontSize: "15px",
        fontWeight: "600",
        backgroundColor: "#f5f5f5",
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        height: "40px",
        padding: "0 20px",
        textAlign: "center",
        fontWeight: "600",
        letterSpacing: "0.2px",
        fontSize: "15px",
        marginLeft: "10px",
        border: "none",
    },
} as const;

const TopMenu: FC = () => {
    const { isMobile } = useWindowWidthAndHeight();
    const { open } = useWeb3Modal();
    const { isConnected } = useAccount();
    return (
        <Header style={{ ...styles.header, padding: isMobile ? "0 5px 0 5px" : "0 20px" }}>
            <h2>
                <div style={styles.logo}>
                    <h2 style={{ marginLeft: '10px' }}>
                        <Link to="/" style={{ color: '#1f8d97' }}>Geo Dash</Link>
                    </h2>
                </div>
            </h2>
            <div style={styles.headerRight}>
                {!isConnected && (
                    <Button shape="round" type="primary" style={styles.button} onClick={() => open()}>
                        Connect Wallet
                    </Button>
                )}
                {isConnected && (
                    <Button shape="round" type="default" style={styles.button} onClick={() => open({ view: 'Account' })}>
                        Wallet Connected
                    </Button>
                )}
            </div>
        </Header>
    );
};

export default TopMenu;
