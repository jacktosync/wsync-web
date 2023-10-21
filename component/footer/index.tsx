import {
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { copyright } from './data';

const Footer = () => {
  return (
    <Box bg={useColorModeValue('#38a169', '#161515')} p={{ base: 4, md: 6 }}>
      <Text fontSize={'1.25rem'} fontWeight={'extrabold'} textAlign={'center'} mx={'auto'}>
        {copyright}{' '}
      </Text>
    </Box>
  );
};

export default Footer;