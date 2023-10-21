import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

// Hook to manage Metamask connection status
const useMetamask = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<string[]>([]);
    const [supportedChains, setSupportedChains] = useState<bigint[]>([
        BigInt(1),    // Ethereum Mainnet
        BigInt(56),   // Binance Smart Chain Mainnet
        BigInt(59144), // Linea Mainnet
        BigInt(8453), // Base Mainnet
        BigInt(42161), // Arbitrum One
        BigInt(42170), // Arbitrum Nova
        BigInt(10), // Optimism Mainnet
        BigInt(324), // zkSync Era Mainnet
        BigInt(204), // opBNB Mainnet
        BigInt(1101), // zkEVM Mainnet
        BigInt(7777777), // Zora Mainnet
        BigInt(5), // Goerli
        BigInt(11155111), // Sepolia
        BigInt(97), // Binance Smart Chain Testnet
        BigInt(421613), // Arbitrum Goerli
        BigInt(84531), // Base Goerli
        BigInt(59140), // Linea Goerli
        BigInt(420), // Optimism Goerli
        BigInt(11155420), // Optimism Sepolia
        BigInt(280), // zkSync Era Testnet
        BigInt(5611), // opBNB Testnet
        BigInt(1422), // zkEVM Testnet
        BigInt(999) // Zora Goerli
        // Add more supported chain IDs here
    ]);
    const [isNotSupported, setIsNotSupported] = useState<boolean>(false);


    // Function to connect Metamask
    const connectMetamask = async () => {
        try {
            if (window.ethereum) {

                // Request user's permission to connect
                const provider = new ethers.BrowserProvider(window.ethereum)
                const network = await provider.getNetwork();
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setIsConnected(true);
                setAccounts(accounts);

                // Detect chain changes
                window.ethereum.on('chainChanged', (_chainId: any) => {
                    window.location.reload();
                });

                const newChainId = BigInt(network.chainId);
                if (!supportedChains.includes(newChainId)) {
                    setIsNotSupported(true);
                }

                // Detect account changes
                window.ethereum.on('accountsChanged', (updatedAccounts: string[]) => {
                    setAccounts(updatedAccounts);
                });
            } else {
                setIsConnected(false);
            }
        } catch (error) {
            // Handle errors
        } 
    };

    // Function to disconnect Metamask
    const disconnectMetamask = () => {
        if (window.ethereum) {
            window.ethereum.removeAllListeners();
            setIsConnected(false);
            setAccounts([]);
        }
    };

    useEffect(() => {
        // Initialize supported chains
        setSupportedChains([
            BigInt(1),    // Ethereum Mainnet
            BigInt(56),   // Binance Smart Chain Mainnet
            BigInt(59144), // Linea Mainnet
            BigInt(8453), // Base Mainnet
            BigInt(42161), // Arbitrum One
            BigInt(42170), // Arbitrum Nova
            BigInt(10), // Optimism Mainnet
            BigInt(324), // zkSync Era Mainnet
            BigInt(204), // opBNB Mainnet
            BigInt(1101), // zkEVM Mainnet
            BigInt(7777777), // Zora Mainnet
            BigInt(5), // Goerli
            BigInt(11155111), // Sepolia
            BigInt(97), // Binance Smart Chain Testnet
            BigInt(421613), // Arbitrum Goerli
            BigInt(84531), // Base Goerli
            BigInt(59140), // Linea Goerli
            BigInt(420), // Optimism Goerli
            BigInt(11155420), // Optimism Sepolia
            BigInt(280), // zkSync Era Testnet
            BigInt(5611), // opBNB Testnet
            BigInt(1422), // zkEVM Testnet
            BigInt(999) // Zora Goerli
            // Add more supported chain IDs here
        ]);

        // Connect to Metamask when the component mounts (you can trigger this based on user actions as well)
        connectMetamask();

        // Clean up the connection when the component unmounts (optional)
        return () => {
            disconnectMetamask();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isConnected,
        accounts,
        supportedChains,
        connectMetamask,
        disconnectMetamask,
        isNotSupported,
    };
};

export default useMetamask;