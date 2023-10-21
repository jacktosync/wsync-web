import { useColorModeValue, SimpleGrid, Text, Heading, Stack } from '@chakra-ui/react';
import EthereumIcon from './Icon/blockchain/ethereum-icon';
import BNBChainIcon from './Icon/blockchain/bnbchain-icon';
import ArbitrumIcon from './Icon/blockchain/arbitrum-icon';
import OptimismIcon from './Icon/blockchain/optimism-icon';
import ZKSYNCIcon from './Icon/blockchain/zksync-icon';
import BasechainIcon from './Icon/blockchain/basechain-icon';

export const chainLogoList = [
    {
        chainName: 'Ethereum',
        chainLogo: <EthereumIcon />,
        chainSite: 'https://ethereum.org/'
    },
    {
        chainName: 'BNB Chain',
        chainLogo: <BNBChainIcon />,
        chainSite: 'https://bnbchain.org/'
    },
    {
        chainName: 'Arbitrum',
        chainLogo: <ArbitrumIcon />,
        chainSite: 'https://arbitrum.io/'
    },
    {
        chainName: 'zkSync Era',
        chainLogo: <ZKSYNCIcon fill={'#3ee5d3'} />,
        chainSite: 'https://zksync.io/'
    },
    {
        chainName: 'Optimism',
        chainLogo: <OptimismIcon />,
        chainSite: 'https://www.optimism.io/'
    },
    {
        chainName: 'Base',
        chainLogo: <BasechainIcon />,
        chainSite: 'https://base.org/'
    }
]

const SuportedChain: React.FC = () => {
    const bgStack = useColorModeValue('gray.100', 'blackAlpha.200')

    return (
        <>
            <Heading
                fontSize={{ base: '4xl', sm: '5xl' }}
                fontWeight="bold"
                textAlign="center"
                maxW="600px"
                mx={'auto'}
                mb={5}
            >
                Let&#39;s Make Your Digital Ideas Realize using Web3!
            </Heading>
            <Text maxW="550px" mx={'auto'} fontSize="xl" mb={20} textAlign="center" color="gray.500">
                Web3 is an idea for a new iteration of the World Wide Web that combines concepts such as decentralization, blockchain technology, and a token-based economy.
            </Text>
            <SimpleGrid columns={{ base: 3, md: 6 }} spacing={6}>
                {chainLogoList.map((chain, index) => (
                    <Stack
                        p={2}
                        rounded={'lg'}
                        title={chain.chainName}
                        as={'a'}
                        href={chain.chainSite}
                        target={'_blank'}
                        rel={'nofollow'}
                        direction={'row' }
                        key={index}>
                            {chain.chainLogo}
                    </Stack>
                ))}
            </SimpleGrid>
        </>
    );
};

export default SuportedChain