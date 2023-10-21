import Head from 'next/head'
import {
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import { getAllPosts } from '@/library/blogApi'
import Post from '@/interfaces/post'
import BlogPostCard from '@/component/BlogPostCard';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
    postByTag: Post[]
}

export default function BlogTopic({ postByTag }: Props) {
    const router = useRouter();
    const { tags } = router.query;

    // Check if no posts were found for the given tag
    useEffect(() => {
        if (!postByTag || postByTag.length === 0) {
            // Redirect to the custom error page with a 404 status code
            router.push('/404');
        }
    }, [postByTag, router]);

    return (
        <>
            <Head>
                <title>{`Story by ${tags} Topic | WSYNC`}</title>
                <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC Blog" />
                <meta property="og:title" content={`Story by ${tags} Topic | WSYNC`} />
                <meta property="og:description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://www.wsync.xyz/api/og?title=A Collections Story by ${tags} Topic!`} />
                <meta property="og:url" content={`https://www.wsync.xyz/topic/${tags}`} />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={`https://www.wsync.xyz/api/og?title=A Collections Story by ${tags} Topic!`}/>
                <meta property="twitter:site" content="@wsync_xyz" />
            </Head>
            <Navbar />
            <Stack p={{ base: 6, md: 4 }} my={24} textTransform={'capitalize'} direction="column" spacing={5} alignItems="center">
                <Heading
                    fontSize={{ base: '4xl', sm: '5xl' }}
                    fontWeight="bold"
                    textAlign="center"
                    maxW="600px"
                >
                    #{tags}
                </Heading>
                <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
                    A Collections Story by #{tags} Topic!
                </Text>
            </Stack>
            <BlogPostCard posts={postByTag} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }: any) {
    const postByTag = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'tags',
    ], [params.tags])

    return {
        props: {
            postByTag,
        },
    };
}