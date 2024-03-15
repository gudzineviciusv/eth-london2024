import {
    useManageSubscription,
    useW3iAccount,
    useInitWeb3InboxClient,
    useMessages
} from '@web3inbox/widget-react'
import React, { useCallback, useEffect } from 'react';
import { useSignMessage, useAccount, useChainId } from 'wagmi';
import { Table, Button, Card, Row, Col, Tag, Spin } from 'antd';
import { useWeb3Modal } from '@web3modal/wagmi/react'

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
    },
    whiteButton: {
        height: "40px",
        padding: "0 20px",
        textAlign: "center",
        fontWeight: "600",
        letterSpacing: "0.2px",
        fontSize: "15px",
        border: "none",
    },
    statusTag: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    connectedRow: {
        background: '#4caf50',
    },
} as const;

const Profile: React.FC = () => {
    const { isSubscribed, isSubscribing, subscribe, isUnsubscribing, unsubscribe } = useManageSubscription();
    const { address, isConnected, connector } = useAccount();
    const { account, setAccount, isRegistered, isRegistering, register } = useW3iAccount();
    const connectedChainId = useChainId();
    const { signMessageAsync } = useSignMessage();
    const { open } = useWeb3Modal();
    const { messages } = useMessages();

    let connectedChain;

    if (connector?.chains) {
        connectedChain = connector.chains.find(chain => chain.id === connectedChainId);
    }

    const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID ?? '';
    useInitWeb3InboxClient({
        projectId,
        domain: process.env.REACT_APP_WALLETCONNECT_DOMAIN ?? '',
        isLimited: false
    })

    const performRegistration = useCallback(async () => {
        if (!address) {
            return;
        }

        try {
            await register(message => signMessageAsync({ message }))
        } catch (registerIdentityError) {
            alert(registerIdentityError)
        }

    }, [signMessageAsync, register, address])

    const performSubscribe = useCallback(async () => {
        await performRegistration();
        await subscribe();
    }, [subscribe, isRegistered])

    const performUnsubscribe = useCallback(async () => {
        await unsubscribe()
    }, [unsubscribe, !isRegistered])

    useEffect(() => {
        const fetchAccount = async () => {
            if (!address) {
                return;
            }

            await setAccount(`eip155:1:${address}`);
        }

        fetchAccount();
    }, [address, setAccount])

    useEffect(() => {
        const performAsyncRegistration = async () => {
            await performRegistration();
        }

        performAsyncRegistration();
    }, [performRegistration])

    const columns = [
        {
            title: 'Icon',
            dataIndex: ['message', 'icon'],
            key: 'title',
            render: (text: string) => <img src={text} alt="icon" style={{ width: '30px' }} />
        },
        {
            title: 'Title',
            dataIndex: ['message', 'title'],
            key: 'title'
        },
        {
            title: 'Body',
            dataIndex: ['message', 'body'],
            key: 'body'
        },
        {
            title: 'Date',
            dataIndex: 'publishedAt',
            key: 'publishedAt',
            render: (text: number) => new Date(text).toLocaleString()
        },
        {
            title: 'Actions',
            dataIndex: ['message', 'url'],
            key: 'url',
            render: (text: string) => {
                if (text[0] === "{") {
                    const { contract, title } = JSON.parse(text);
                    return (
                        <Button
                            shape="round"
                            size="small"
                            type="primary"
                            style={styles.button}
                            onClick={() => window.open(contract, "_blank")}
                        >
                            {title}
                        </Button>
                    );
                }

                return null;
            }
        },
    ];

    const blockchainColumns = [
        {
            title: 'Network',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Network ID',
            dataIndex: 'id',
            key: 'id',
            style: { background: '#4caf50' }
        },
    ];
    const getRowClassName = (record: { id: number }) => {
        return connectedChainId === record.id ? 'selected-row' : '';
    };

    return (
        <>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Profile"
                        extra={
                            <Tag color={isConnected ? '#1f8d97' : 'red'} style={styles.statusTag}>
                                {isConnected ? 'Connected' : 'Not Connected'}
                            </Tag>
                        }>
                        {isConnected && (
                            <>
                                <p style={{ marginTop: 0 }}><strong>Wallet Address:</strong> {address}</p>
                                <p><strong>Network:</strong> {connectedChain?.name} - {connectedChain?.id}</p>
                                <p><strong>Native Symbol:</strong> {connectedChain?.nativeCurrency.symbol} ({connectedChain?.nativeCurrency.decimals} decimals)</p>

                                {isRegistered && (
                                    <p style={{ marginBottom: '30px' }}>
                                        <strong>Web3Inbox Account ID:</strong> {account}
                                    </p>
                                )}
                                <Table
                                    columns={blockchainColumns}
                                    dataSource={connector?.chains || []}
                                    pagination={false}
                                    rowKey="id"
                                    rowClassName={getRowClassName}
                                />
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Button shape="round" size="small" type="primary"
                                        style={styles.button} onClick={() => open({ view: 'Networks' })}>
                                        Switch Network
                                    </Button>
                                </div>
                            </>
                        )}
                        {!isConnected && (
                            <div style={{ textAlign: 'center' }}>
                                <Button shape="round" type="primary" style={styles.button} onClick={() => open()}>
                                    Connect Wallet
                                </Button>
                            </div>
                        )}
                    </Card>
                </Col>
                <Col span={16}>
                    <h2 style={{ marginTop: 0 }}>Web3Inbox Notifications</h2>
                    <p>TODO
                    </p>
                    {!account && (isConnected || isRegistered) ? (
                        <Spin tip="Loading" size="large" style={{ marginTop: '50px' }}>
                            <div className="content" />
                        </Spin>
                    ) : (
                        isConnected ? (
                            <>
                                {!isRegistered ? (
                                    <div style={{ textAlign: "center", marginTop: '20px' }}>
                                        <Button shape="round" size="small" type="primary"
                                            style={styles.button} onClick={performRegistration}
                                            disabled={isRegistering}>
                                            {isRegistering ? 'Signing...' : 'Sign to Receive Notifications'}
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        {!isSubscribed ? (
                                            <>
                                                <div style={{ textAlign: "center", marginTop: '20px' }}>
                                                    <Button shape="round" size="small" type="primary"
                                                        style={styles.button} onClick={performSubscribe}
                                                        disabled={isSubscribing}>
                                                        {isSubscribing ? 'Subscribing...' : 'Subscribe to Notifications'}
                                                    </Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Table
                                                    columns={columns}
                                                    pagination={false}
                                                    scroll={{ x: true }}
                                                    size="small"
                                                    dataSource={messages}
                                                    style={{ marginTop: '10px' }}
                                                    rowKey="id" />
                                                <div style={{ textAlign: "center", marginTop: '20px' }}>
                                                    <Button shape="round" size="small" type="default"
                                                        style={styles.whiteButton} onClick={performUnsubscribe}
                                                        disabled={isUnsubscribing}>
                                                        {isUnsubscribing ? 'Unsubscribing...' : 'Unsubscribe'}
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <Button shape="round" type="primary" style={styles.button} onClick={() => open()}>
                                    Connect Wallet
                                </Button>
                            </div>
                        )
                    )}
                </Col>
            </Row>
        </>
    )
};

export default Profile;
