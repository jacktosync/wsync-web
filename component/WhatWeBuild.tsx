import {
  Box,
  Text,
  useColorModeValue,
  Stack,
  Heading,
  Flex,
  useColorMode
} from '@chakra-ui/react';
import LightWhatWeBuildIcon from './Icon/light-whatwebuild-icon';
import DarkWhatWeBuildIcon from './Icon/dark-whatwebuild-icon';

interface IBuild {
  heading: string;
  content: string;
}

const whatWeBuildList: IBuild[] = [
  {
    heading: 'Web 2.0',
    content: 'We will create blogs, online stores, landing pages, profile pages, bio links and more.',
  },
  {
    heading: 'Web 3.0',
    content: 'We will create NFT Minting pages, DEX and all pages with wallet connecting feature.',
  }
];

const WhatWeBuild = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Stack id='portfolio' my={20} direction={{ base: 'column', md: 'row' }} spacing={5}>
        {/* Image on the left */}
        {colorMode === 'light' ? (
          <LightWhatWeBuildIcon />
        ) : (
          <DarkWhatWeBuildIcon />
        )}

        {/* Right-side content */}
        <Flex direction={'column'} my={'auto'}>
          {whatWeBuildList.map((list, index) => (
            <Box my={{ base: 2, md: 5 }} p={5} key={index}>
              {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
              <Heading color={useColorModeValue('#34a853', 'goldenrod')}>{list.heading}</Heading>
              <Text fontSize="xl" color="gray.500">{list.content}</Text>
            </Box>
          ))}
        </Flex>
      </Stack>
    </>
  );
};

export default WhatWeBuild;