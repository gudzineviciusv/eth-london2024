import {Buffer} from "buffer";

import {EIP6963Connector, walletConnectProvider} from "@web3modal/wagmi";
import {createWeb3Modal} from '@web3modal/wagmi/react';
import {Layout, ConfigProvider, theme} from "antd";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {goerli, mainnet, scrollSepolia, sepolia, lineaTestnet} from "viem/chains";
import {configureChains, createConfig, WagmiConfig} from "wagmi";
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet';
import {InjectedConnector} from 'wagmi/connectors/injected';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import {publicProvider} from 'wagmi/providers/public';


import {TopMenu, MainContent} from "layout";

import Profile from "./components/Profile";
import JoinChallenge from "./components/JoinChallenge"; 

import "styles/App.css";
import Footer from "./layout/Footer";
import CitySelect from "layout/CitySelect/CitySelect";
import HomePage from "layout/ChallengeSelect/ChallengeSelect";
import CreateChalange from "layout/CreateChalange/CreateChalange";

const styles = {
    layout: {
        height: "100vh",
        overflow: "auto",
        fontFamily: "Sora, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E9E9E9",
    },
    container: {
        display: "flex",
        maxWidth: "400px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflowX: "scroll",
        backgroundColor: "#f5f5f5",
    },
    button: {
        margin: "0 10px",
    }
} as const;

const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || "";

const { chains, publicClient } = configureChains(
    [mainnet, lineaTestnet, scrollSepolia, sepolia, goerli],
    [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
    name: 'CHAIN RUNNERZ',
    description: 'TODO',
    url: 'TODO',
    icons: ['TODO']
};

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
        new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
        new EIP6963Connector({ chains }),
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
        new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
    ],
    publicClient
})

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'light' });

function App() {
    if (!window.Buffer) window.Buffer = Buffer;
    const { defaultAlgorithm } = theme;
    return (
        <Router>
            <WagmiConfig config={wagmiConfig}>
                <ConfigProvider
                    theme={{
                        algorithm: defaultAlgorithm
                    }}
                >
                    <Layout style={styles.layout}>
                        <div style={styles.container}>
                        <TopMenu />
                        <MainContent>
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/" element={<HomePage />} />
                                <Route path="/create-challenge" element={<CreateChalange />} />
                                <Route path="/join-challenge" element={<JoinChallenge />} />
                                <Route path="/city-select" element={<CitySelect />} />
                            </Routes>
                        </MainContent>
                        <Footer />
                        </div>
                    </Layout>
                </ConfigProvider>
            </WagmiConfig>
        </Router>
    );
}


export default App;
