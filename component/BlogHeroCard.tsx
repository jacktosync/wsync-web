import { Stack, Text, Box, Button, useBreakpointValue, useColorModeValue, Heading, IconProps, Icon } from '@chakra-ui/react';
import type Author from '@/interfaces/author';

type Props = {
    title: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const BlogHeroCard = ({
    title,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <Box
            bgImage={{ base: 'url(/content/bg-hero-blog-card-mobile.svg)', md: 'url(/content/bg-hero-blog-card-desktop.svg)' }}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}
            py={10}
            px={5}
            bgPosition="top right"
        >
            <Stack maxWidth={'550px'} direction="column" spacing={5} justifyContent="center">
                <Heading
                    fontSize={{ base: '3xl', md: '4xl' }}
                    lineHeight={1.5}
                    fontWeight={'extrabold'}
                >
                    {title}
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {excerpt}
                </Text>
                <Stack direction="row">
                    <Button
                        bg={useColorModeValue('#34a853', 'goldenrod')}
                        as={'a'}
                        fontWeight={'extrabold'}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color={'black'}
                        href={`/blog/${slug}`}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Read More
                    </Button>
                    <Text my={'auto'}>
                        Published by{' '}
                        <Text as={'span'} fontWeight={'bold'} color={useColorModeValue('#34a853', 'goldenrod')}>
                            {author.name}
                        </Text>
                    </Text>
                </Stack>
            </Stack>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(230px)' }}
            />
        </Box>
    );
};

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '50vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};

export default BlogHeroCard;