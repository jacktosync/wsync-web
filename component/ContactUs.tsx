import {
    Box,
    Text,
    useColorModeValue,
    Stack,
    Heading,
    Flex,
    useColorMode
} from '@chakra-ui/react';
import LightContactIcon from './Icon/light-contact-icon';
import DarkContactIcon from './Icon/dark-contact-icon';

interface IContact {
    contactName: string;
    contactLink: string;
    contactInfo: string;
}

const contactInfoDetail: IContact[] = [
    {
        contactName: 'X Platform',
        contactLink: 'https://x.com/wsync_xyz',
        contactInfo: 'DM are open for everyone or create post and mention to @wsync_xyz',
    },
    {
        contactName: 'Telegram',
        contactLink: 'https://t.me/jackpepespot',
        contactInfo: 'We have a lot of activity on Telegram, but your messages are our priority',
    }
];

const ContactUs = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Stack id='contact' my={20} direction={{ base: 'column', md: 'row' }} spacing={5}>
                {/* Image on the left */}
                {colorMode === 'light' ? (
                    <LightContactIcon />
                ) : (
                    <DarkContactIcon />
                )}

                {/* Right-side content */}
                <Flex direction={'column'} my={'auto'}>
                    {contactInfoDetail.map((info, index) => (
                        <Box as={'a'} href={info.contactLink} target={'_blank'} my={{ base: 2, md: 5 }} p={5} key={index}>
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <Heading color={useColorModeValue('#34a853', 'goldenrod')}>{info.contactName}</Heading>
                            <Text fontSize="xl" color="gray.500">{info.contactInfo}</Text>
                        </Box>
                    ))}
                </Flex>
            </Stack>
        </>
    );
};

export default ContactUs;