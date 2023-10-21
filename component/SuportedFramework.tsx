import { SimpleGrid, Text, Heading, Stack } from '@chakra-ui/react';
import NextJSIcon from './Icon/framework/nextjs-icon';
import ReactJSIcon from './Icon/framework/reactjs-icon';
import SolidityIcon from './Icon/framework/solidity-icon';
import EthersJSIcon from './Icon/framework/ethersjs-icon';
import JavascriptIcon from './Icon/framework/javascript-icon';
import TypescriptIcon from './Icon/framework/typescript-icon';
import ChakraUIIcon from './Icon/framework/chakraui-icon';
import ExpoIcon from './Icon/framework/expo-icon';
import HTMLIcon from './Icon/framework/html-icon';
import CSSIcon from './Icon/framework/css-icon';
import TailwindCSSIcon from './Icon/framework/tailwindcss-icon';
import WordpressIcon from './Icon/framework/wordpress-icon';

export const suportedframeWorkList = [
    {
        frameWorkName: 'NextJS',
        frameWorkLogo: <NextJSIcon fill={'#FF9800'} />,
        officialSite: 'https://nextjs.org/'
    },
    {
        frameWorkName: 'React',
        frameWorkLogo: <ReactJSIcon fill={'#0cafdb'} />,
        officialSite: 'https://react.dev/'
    },
    {
        frameWorkName: 'Javascript',
        frameWorkLogo: <JavascriptIcon />,
        officialSite: 'https://www.javascript.com/'
    },
    {
        frameWorkName: 'EthersJS',
        frameWorkLogo: <EthersJSIcon />,
        officialSite: 'https://ethers.org/'
    },
    {
        frameWorkName: 'Solidity',
        frameWorkLogo: <SolidityIcon fill={'green'} />,
        officialSite: 'https://soliditylang.org/'
    },
    {
        frameWorkName: 'Typescript',
        frameWorkLogo: <TypescriptIcon />,
        officialSite: 'https://www.typescriptlang.org/'
    },
    {
        frameWorkName: 'Chakra UI',
        frameWorkLogo: <ChakraUIIcon fill={'#155f73'} />,
        officialSite: 'https://chakra-ui.com/'
    },
    {
        frameWorkName: 'Expo',
        frameWorkLogo: <ExpoIcon fill={'#7030e1'} />,
        officialSite: 'https://expo.dev/'
    },
    {
        frameWorkName: 'HTML',
        frameWorkLogo: <HTMLIcon fill={'#FF5722'} />,
        officialSite: 'https://html.spec.whatwg.org/'
    },
    {
        frameWorkName: 'CSS',
        frameWorkLogo: <CSSIcon fill={'#960064'} />,
        officialSite: 'https://www.w3.org/TR/CSS/#css'
    },
    {
        frameWorkName: 'Tailwind CSS',
        frameWorkLogo: <TailwindCSSIcon />,
        officialSite: 'https://tailwindcss.com/'
    },
    {
        frameWorkName: 'Wordpress',
        frameWorkLogo: <WordpressIcon fill={'#3F51B5'} />,
        officialSite: 'https://wordpress.org/'
    }
]

const SuportedFrameWork: React.FC = () => {

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
                Let&#39;s Bring your Digital Ideas to Life!
            </Heading>
            <Text maxW="550px" mx={'auto'} fontSize="xl" mb={20} textAlign="center" color="gray.500">
                We have experienced for specializing in creating dynamic and user-friendly websites and applications in web 2.0 or web 3.0 using some framework and program language below.
            </Text>
            <SimpleGrid
                columns={{ base: 3, md: 6 }}
                spacing={6}>
                {suportedframeWorkList.map((framework, index) => (
                    <Stack
                        as={'a'}
                        title={framework.frameWorkName}
                        href={framework.officialSite}
                        target={'_blank'}
                        rel={'nofollow'}
                        p={2}
                        direction={'column'}
                        key={index}>
                        {framework.frameWorkLogo}
                    </Stack>
                ))}
            </SimpleGrid>
        </>
    );
};

export default SuportedFrameWork