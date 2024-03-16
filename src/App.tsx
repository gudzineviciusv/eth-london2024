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

import "styles/App.css";
import Footer from "./layout/Footer";

const styles = {
    layout: {
        width: "100vw",
        height: "100vh", 
        overflow: "auto",
        fontFamily: "Sora, sans-serif",
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
                        <TopMenu />
                        <MainContent>
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                            </Routes>
                        </MainContent>
                        <Footer />
                    </Layout>
                </ConfigProvider>
            </WagmiConfig>
        </Router>
    );
}


export default App;
