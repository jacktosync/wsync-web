import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface INetwork {
    name: string;
    explorer: string;
    symbol: string;
}

export async function useNetwork() {
    const [network, setNetwork] = useState<INetwork>({ name: '', explorer: '', symbol: '' })

    useEffect(() => {

        async function selectNetwork() {
            try {

                const provider = new ethers.BrowserProvider(window.ethereum)
                const networks = await provider.getNetwork()

                if (networks.chainId === BigInt(1)) { // Ethereum
                    const ntwrk = {
                        name: 'Ethereum',
                        explorer: 'https://etherscan.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(56)) { // BNB Mainnet
                    const ntwrk = {
                        name: 'BNB Mainnet',
                        explorer: 'https://bscscan.com/',
                        symbol: 'BNB',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(59144)) { // Linea Mainnet
                    const ntwrk = {
                        name: 'Linea Mainnet',
                        explorer: 'https://lineascan.build/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(8453)) { // Base Mainnet
                    const ntwrk = {
                        name: 'Base Mainnet',
                        explorer: 'https://basescan.org/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(42161)) { // Arbitrum One
                    const ntwrk = {
                        name: 'Arbitrum One',
                        explorer: 'https://arbiscan.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(42170)) { // Arbitrum Nova
                    const ntwrk = {
                        name: 'Arbitrum Nova',
                        explorer: 'https://nova.arbiscan.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(10)) { // Optimism Mainnet
                    const ntwrk = {
                        name: 'Optimism Mainnet',
                        explorer: 'https://optimistic.etherscan.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(324)) { // zkSync Era Mainnet
                    const ntwrk = {
                        name: 'zkSync Era Mainnet',
                        explorer: 'https://explorer.zksync.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(204)) { // opBNB Mainnet
                    const ntwrk = {
                        name: 'opBNB Mainnet',
                        explorer: 'https://opbnbscan.com/',
                        symbol: 'BNB',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(1101)) { // zkEVM Mainnet
                    const ntwrk = {
                        name: 'zkEVM Mainnet',
                        explorer: 'https://zkevm.polygonscan.com/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(7777777)) { // Zora Mainnet
                    const ntwrk = {
                        name: 'Zora Mainnet',
                        explorer: 'https://explorer.zora.energy/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(5)) { // Goerli
                    const ntwrk = {
                        name: 'Goerli',
                        explorer: 'https://goerli.etherscan.io/',
                        symbol: 'GoerliETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(11155111)) { // Sepolia
                    const ntwrk = {
                        name: 'Sepolia',
                        explorer: 'https://sepolia.etherscan.io/',
                        symbol: 'SepoliaETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(97)) { // BNB Testnet
                    const ntwrk = {
                        name: 'BNB Testnet',
                        explorer: 'https://testnet.bscscan.com/',
                        symbol: 'tBNB',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(421613)) { // Arbitrum Goerli
                    const ntwrk = {
                        name: 'Arbitrum Goerli',
                        explorer: 'https://goerli.arbiscan.io/',
                        symbol: 'AGOR',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(84531)) { // Base Goerli
                    const ntwrk = {
                        name: 'Base Goerli',
                        explorer: 'https://goerli.basescan.org/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(59140)) { // Linea Goerli
                    const ntwrk = {
                        name: 'Linea Goerli',
                        explorer: 'https://goerli.lineascan.build/',
                        symbol: 'LineaETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(420)) { // Optimism Goerli
                    const ntwrk = {
                        name: 'Optimism Goerli',
                        explorer: 'https://goerli-optimism.etherscan.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(11155420)) { // Optimism Sepolia
                    const ntwrk = {
                        name: 'Optimism Sepolia',
                        explorer: 'https://optimism-sepolia.blockscout.com/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(280)) { // zkSync Era Testnet
                    const ntwrk = {
                        name: 'zkSync Era Testnet',
                        explorer: 'https://goerli.explorer.zksync.io/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(5611)) { // opBNB Testnet
                    const ntwrk = {
                        name: 'opBNB Testnet',
                        explorer: 'https://testnet.opbnbscan.com/',
                        symbol: 'tcBNB',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(1422)) { // zkEVM Testnet
                    const ntwrk = {
                        name: 'zkEVM Testnet',
                        explorer: 'https://testnet-zkevm.polygonscan.com/',
                        symbol: 'ETH',
                    }
                    setNetwork(ntwrk)
                } else if (networks.chainId === BigInt(999)) { // Zora Goerli
                    const ntwrk = {
                        name: 'Zora Goerli',
                        explorer: 'https://testnet.explorer.zora.energy/',
                        symbol: 'WAN',
                    }
                    setNetwork(ntwrk)
                } else {
                    return
                }

            } catch (error) {
                // Error message
            }
        }
        selectNetwork()
    })

    return network
}