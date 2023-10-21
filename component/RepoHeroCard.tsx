import { Image, Stack, Text, Box, Skeleton, Button, useBreakpointValue, useColorModeValue, Heading, IconProps, Icon, Flex, Spacer } from '@chakra-ui/react'

type Props = {
    title: string
    coverImage: string
    ogImage: string
    excerpt: string
    slug: string
    price: string
    demo: string
}

const RepoHeroCard = ({
    title,
    ogImage,
    excerpt,
    slug,
    price,
    demo,
}: Props) => {
    return (
        <Box
            bgImage={{ base: 'none', md: 'url(/content/bg-hero-repo-card.svg)' }}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}
            py={10}
            px={5}
            bgPosition="top right"
        >
            <Box maxWidth={'450px'} mb={10} display={{ base: 'block', md: 'none' }} ml={{ base: 0, md: 5 }}>
                <Image
                    width={'100%'}
                    height={'100%'}
                    objectFit={'cover'}
                    src={ogImage}
                    alt={title}
                    rounded={'lg'}
                    fallback={<Skeleton />}
                />
            </Box>
            <Stack maxWidth={'500px'} direction="column" spacing={5} justifyContent="center">
                <Heading
                    fontSize={{ base: '3xl', md: '4xl' }}
                    lineHeight={1.5}
                    fontWeight={'extrabold'}
                >
                    {title}
                </Heading>
                <Text
                    textAlign={'left'}
                    fontWeight={'bold'}
                    color={useColorModeValue('#34a853', 'goldenrod')}
                    my={'auto'}
                >
                    Est Price: ${price} USD
                </Text>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {excerpt}
                </Text>
                <Stack gap={2} as={Flex} direction={'row'}>
                    <Button
                        fontWeight={'extrabold'}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        size={'lg'}
                        width={'100%'}
                        rounded={'lg'}
                        bg={useColorModeValue('#34a853', 'goldenrod')}
                        color={'black'}
                        as={'a'}
                        href={demo}
                        _hover={{ textDecoration: 'none' }}
                        target={'_blank'}
                    >
                        Demo
                    </Button>
                    <Spacer />
                    <Button
                        fontWeight={'extrabold'}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        size={'lg'}
                        width={'100%'}
                        rounded={'lg'}
                        bg={useColorModeValue('#34a853', 'goldenrod')}
                        color={'black'}
                        as={'a'}
                        href={`/portfolio/${slug}`}
                        _hover={{ textDecoration: 'none' }}
                    >
                        More
                    </Button>
                </Stack>
            </Stack>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(230px)' }}
            />
        </Box>
    )
}

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

export default RepoHeroCard