import React, { useState, useEffect } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    useColorModeValue,
    Spacer,
    Link,
    IconButton,
    useDisclosure,
    DrawerContent,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    Text,
    Stack,
    useColorMode,
    HStack,
    Icon
} from '@chakra-ui/react';
import MenuIcon from '../Icon/menu-icon';
import DarkLogoIcon from '../Icon/dark-logo-icon';
import LightLogoIcon from '../Icon/light-logo-icon';
import NewspaperIcon from '../Icon/newspaper-icon';
import HashtagIcon from '../Icon/hashtag-icon';
import EnvelopeIcon from '../Icon/envelope-icon';
import PortfolioBookIcon from '../Icon/portfolio-book-icon';
import FrameworkIcon from '../Icon/framework-icon';
import FAQIcon from '../Icon/faq-icon';

export const navMenu = [
    {
        name: 'FAQ',
        link: '/#faq',
        icon: <FAQIcon />
    },
    {
        name: 'Blog',
        link: '/blog',
        icon: <NewspaperIcon />
    },
    {
        name: 'Topic',
        link: '/topic',
        icon: <HashtagIcon />
    },
    {
        name: 'Contact',
        link: '/#contact',
        icon: <EnvelopeIcon />
    },
    {
        name: 'Portfolio',
        link: '/portfolio',
        icon: <PortfolioBookIcon />
    },
    {
        name: 'Framework',
        link: '/framework',
        icon: <FrameworkIcon />
    }
]

export default function Navbar() {
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrollingUp(currentScrollY < lastScrollY);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Box
                width={'100%'}
            >
                <Flex gap={2} h={isScrollingUp ? 16 : 16} alignItems="center" justifyContent="space-between">
                    <Link href='/' title='WSYNC' pos={'absolute'} top={1} left={1}>
                        {colorMode === 'light' ? (
                            <DarkLogoIcon width={'180'} height={'90'} />
                        ) : (
                            <LightLogoIcon width={'180'} height={'90'} />
                        )}
                    </Link>
                    <Spacer />
                    <IconButton
                        pos={isScrollingUp ? 'fixed' : 'relative'}
                        zIndex={2}
                        right={0}
                        top={6}
                        bg={'unset'}
                        _hover={{ bg: 'none' }}
                        icon={<MenuIcon width={'90'} height={'150'} fill={'#34a853'} />}
                        aria-label="Open Menu"
                        onClick={onOpen}
                    />
                    <Box
                        bg={useColorModeValue('gray.50', '#161515')}
                        pos={isScrollingUp ? 'fixed' : 'absolute'}
                        top={0}
                        right={0}
                        zIndex={1}
                        roundedBottomLeft={'full'}
                        width={'7rem'}
                        height={'8rem'}
                    />
                </Flex>
            </Box>
            <Drawer onClose={onClose} isOpen={isOpen} size={{ base: 'lg', md: 'xs' }} placement={'left'}>
                <DrawerOverlay />
                <DrawerContent bg={useColorModeValue('#f9efdd', '#121212')}>
                    <DrawerBody>
                        <Stack align={'center'} direction={'column'}>
                            <Link href='/' title='WSYNC'>
                                {colorMode === 'light' ? (
                                    <DarkLogoIcon width={'180'} height={'90'} />
                                ) : (
                                    <LightLogoIcon width={'180'} height={'90'} />
                                )}
                            </Link>
                            {navMenu.map((nav, index) => (
                                <HStack p={5} width="100%" py={2} key={index} direction="column">
                                    <Flex gap={4} direction="row" align="center">
                                        <Icon fill={useColorModeValue('#34a853', 'goldenrod')} fontSize={'2rem'}>{nav.icon}</Icon>
                                        <Text title={nav.name} _hover={{color: useColorModeValue('#34a853', 'goldenrod')}} fontWeight={'bold'} fontSize={'1.5rem'} as="a" href={nav.link}>
                                            {nav.name}
                                        </Text>
                                    </Flex>
                                </HStack>
                            ))}
                            <IconButton
                                fontSize={'6xl'}
                                mt={20}
                                textAlign={'center'}
                                color={useColorModeValue('#34a853', '#769d1b')}
                                bg={'unset'}
                                _hover={{ bg: 'none' }}
                                icon={<CloseIcon />}
                                aria-label="Open Menu"
                                onClick={onClose}
                            />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}