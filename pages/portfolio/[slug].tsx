import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getRepoBySlug, getAllRepo } from '@/library/repoApi'
import markdownToHtml from '@/library/markdownToHtml'
import type RepoType from '@/interfaces/repo'
import Repo from '@/interfaces/repo'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'
import {
    Stack,
    Text,
    Image,
    Box,
    Heading,
    Flex,
    useBreakpointValue,
    useColorModeValue,
    IconProps,
    Icon,
    Skeleton,
    Button,
    Spacer,
    Divider,
    useColorMode
} from '@chakra-ui/react'
import DateFormatter from '@/component/DateFormatter'
import RepoBody from '@/component/RepoBody'
import RepoPostCard from '@/component/RepoPostCard'

type Props = {
    repo: RepoType;
    relatedRepo: Repo[];
}


export default function Repository({ repo, relatedRepo }: Props) {
    const { colorMode } = useColorMode();
    const router = useRouter()
    if (!router.isFallback && !repo?.slug) {
        return <ErrorPage statusCode={404} />
    }


    return (
        <>
            {router.isFallback ? (
                <Text>Loading…</Text>
            ) : (
                <>
                    <Head>
                        <title>{`${repo.title} | WSYNC`}</title>
                        <meta name="description" content={repo.excerpt} />
                        <meta name="keywords" content={repo.tags.toString()} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
                        <link rel="manifest" href="/manifest.json" />
                        <link rel="canonical" href={`/portfolio/${repo.slug}`} />
                        <meta property="og:site_name" content="WSYNC" />
                        <meta property="og:title" content={`${repo.title} | WSYNC`} />
                        <meta property="og:description" content={repo.excerpt} />
                        <meta property="og:type" content="article" />
                        <meta property="og:image" content={`https://www.wsync.xyz${repo.ogImage}`} />
                        <meta property="og:url" content={`https://www.wsync.xyz/portfolio/${repo.slug}`} />
                        <meta property="og:image:width" content="1280" />
                        <meta property="og:image:height" content="640" />
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:image" content={`https://www.wsync.xyz${repo.ogImage}`} />
                        <meta property="twitter:site" content="@wsync_xyz" />
                    </Head>
                    <Navbar />
                    <Box
                        bgImage={colorMode === 'light' ? ({ base: 'none', md: 'url(/content/bg-hero-repo-card-light.svg)' }) : ({ base: 'none', md: 'url(/content/bg-hero-repo-card-dark.svg)' })}
                        bgSize={'contain'}
                        bgRepeat={'no-repeat'}
                        pt={16}
                        pb={10}
                        px={5}
                        bgPosition="top right"
                    >
                        <Stack maxWidth={'550px'} direction="column" spacing={5} justifyContent="center">
                            <Heading
                                fontSize={{ base: '3xl', md: '4xl' }}
                                lineHeight={1.5}
                                fontWeight={'extrabold'}
                            >
                                {repo.title}
                            </Heading>
                            <Text fontSize={'xl'} color={'gray.500'}>
                                {repo.excerpt}
                            </Text>
                        </Stack>
                        <Stack direction="row" mt={5}>
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <Text maxW="550px" fontWeight={'bold'} mb={2} fontSize={'md'} textAlign="center" color={useColorModeValue('#34a853', 'goldenrod')}>
                                Published <DateFormatter dateString={repo.date} />
                            </Text>
                        </Stack>
                    </Box>
                    <Divider mx={5} display={{ base: 'none', md: 'block' }} maxWidth={'475px'} />
                    <Blur
                        position={'absolute'}
                        top={-10}
                        left={-10}
                        style={{ filter: 'blur(100px)' }}
                    />
                    <Box as={Stack} gap={{ base: 0, md: 2 }} direction={{ base: 'column', md: 'row' }} >
                        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                        <Box display={{ base: 'block', md: 'none' }} p={5} color={'#9E9E9E'} bg={useColorModeValue('gray.100', '#181515f7')}>
                            <Box mb={{ base: 0, md: 10 }}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    objectFit={'cover'}
                                    src={repo.ogImage}
                                    alt={repo.title}
                                    rounded={'lg'}
                                    fallback={<Skeleton />}
                                />
                            </Box>
                            <Text py={5} fontWeight={'bold'} >Est Price : <Text as={'span'} float={'right'}>${repo.price} USD</Text></Text>
                            <Text fontWeight={'bold'} >Delivery : <Text as={'span'} float={'right'}>3 Day Work</Text></Text>
                            <Flex gap={2} mt={5} direction={'row'}>
                                <Button
                                    as={'a'}
                                    href={repo.demo}
                                    target={'_blank'}
                                    fontWeight={'extrabold'}
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    bgColor={useColorModeValue('#34a853', 'goldenrod')}
                                    color={'black'}
                                    _hover={{
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        bgColor: useColorModeValue('goldenrod', '#34a853')
                                    }
                                    }
                                    rounded={'lg'}
                                    width={'100%'}
                                    size={'lg'}
                                >
                                    Demo
                                </Button>
                                <Spacer />
                                <Button
                                    as={'a'}
                                    href={'https://t.me/jackpepespot'}
                                    target={'_blank'}
                                    fontWeight={'extrabold'}
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    bgColor={useColorModeValue('#34a853', 'goldenrod')}
                                    color={'black'}
                                    _hover={{
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        bgColor: useColorModeValue('goldenrod', '#34a853')
                                    }
                                    }
                                    rounded={'lg'}
                                    width={'100%'}
                                    size={'lg'}
                                >
                                    Order
                                </Button>
                            </Flex>
                        </Box>
                        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                        <Box p={5}>
                            <RepoBody content={repo.content} />
                        </Box>
                        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                        <Box width={'5xl'} display={{ base: 'none', md: 'block' }} p={5} color={'gray.500'} >
                            <Box mb={{ base: 0, md: 10 }}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    objectFit={'cover'}
                                    src={repo.ogImage}
                                    alt={repo.title}
                                    rounded={'lg'}
                                    fallback={<Skeleton />}
                                />
                            </Box>
                            <Text py={5} fontWeight={'bold'} >Est Price : <Text as={'span'} float={'right'}>${repo.price} USD</Text></Text>
                            <Text fontWeight={'bold'} >Delivery : <Text as={'span'} float={'right'}>3 Day Work</Text></Text>
                            <Flex gap={2} mt={5} direction={'row'}>
                                <Button
                                    as={'a'}
                                    href={repo.demo}
                                    target={'_blank'}
                                    fontWeight={'extrabold'}
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    bgColor={useColorModeValue('#34a853', 'goldenrod')}
                                    color={'black'}
                                    _hover={{
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        bgColor: useColorModeValue('goldenrod', '#34a853')
                                    }
                                    }
                                    rounded={'lg'}
                                    width={'100%'}
                                    size={'lg'}
                                >
                                    Demo
                                </Button>
                                <Spacer />
                                <Button
                                    as={'a'}
                                    href={'https://t.me/jackpepespot'}
                                    target={'_blank'}
                                    fontWeight={'extrabold'}
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    bgColor={useColorModeValue('#34a853', 'goldenrod')}
                                    color={'black'}
                                    _hover={{
                                        // eslint-disable-next-line react-hooks/rules-of-hooks
                                        bgColor: useColorModeValue('goldenrod', '#34a853')
                                    }
                                    }
                                    rounded={'lg'}
                                    width={'100%'}
                                    size={'lg'}
                                >
                                    Order
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                    {relatedRepo.length > 0 && <RepoPostCard repos={relatedRepo} />}
                    <Footer />
                </>
            )}
        </>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const repo = getRepoBySlug(params.slug, [
        'slug',
        'title',
        'excerpt',
        'price',
        'demo',
        'tags',
        'date',
        'coverImage',
        'author',
        'ogImage',
        'content',
    ]);

    // Fetch related posts based on tags
    const relatedRepo = getAllRepo([
        'slug',
        'title',
        'excerpt',
        'price',
        'demo',
        'tags',
        'date',
        'coverImage',
        'author',
        'ogImage',
    ]).filter(
        (relatedRepo) =>
            relatedRepo.slug !== repo.slug &&
            relatedRepo.tags.some((tag: any) => repo.tags.includes(tag))
    );

    const content = await markdownToHtml(repo.content || '');

    return {
        props: {
            repo: {
                ...repo,
                content,
            },
            relatedRepo, // Pass related repo as a prop
        },
    };
}

export async function getStaticPaths() {
    const repos = getAllRepo(['slug'])

    return {
        paths: repos.map((repo) => {
            return {
                params: {
                    slug: repo.slug,
                },
            }
        }),
        fallback: false,
    }
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