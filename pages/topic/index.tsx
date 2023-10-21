import Head from 'next/head'
import {
    Box,
    Heading,
    Icon,
    IconProps,
    Stack,
    useBreakpointValue,
    Text
} from '@chakra-ui/react';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import BlogTagsCard from '@/component/BlogTagsCard';
import { getAllPosts } from '@/library/blogApi';
import Post from '@/interfaces/post'
import BlogPostCard from '@/component/BlogPostCard';

type Props = {
    postByTag: Post[]
}

export default function BlogTopicIndex({ postByTag }: Props) {
    return (
        <>
            <Head>
                <title>Explore Topics | WSYNC</title>
                <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC Blog" />
                <meta property="og:title" content="Explore Topics | WSYNC" />
                <meta property="og:description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.wsync.xyz/images/wsync-home-page.png" />
                <meta property="og:url" content="https://www.wsync.xyz" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://www.wsync.xyz/images/wsync-home-page.png" />
                <meta property="twitter:site" content="@wsync_xyz" />
            </Head>
            <Navbar />
            <Box mt={10} py={5}>
                <Stack textTransform={'capitalize'} direction="column" spacing={6} alignItems="center" mb={10}>
                    <Heading
                        fontSize={{ base: '4xl', sm: '5xl' }}
                        fontWeight="bold"
                        textAlign="center"
                        maxW="600px"
                    >
                        Explore Topics
                    </Heading>
                    <Text maxW="550px" mb={10} fontSize="xl" textAlign="center" color="gray.500">
                        Explore all the interesting topics on this page
                    </Text>
                </Stack>
                <Blur
                    position={'absolute'}
                    top={-10}
                    left={-10}
                    style={{ filter: 'blur(230px)' }}
                />
                <BlogTagsCard />
            </Box>
            <BlogPostCard posts={postByTag} />
            <Footer />
        </>
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

export async function getServerSideProps() {
    const postByTag = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'tags',
    ], ['javascript'])

    return {
        props: {
            postByTag,
        },
    };
}