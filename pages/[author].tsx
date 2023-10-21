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
    postByAuthor: Post[]
}

export default function BlogTopic({ postByAuthor }: Props) {
    const router = useRouter();
    const { author } = router.query;
    const metaTitle = `Story By ${postByAuthor[0].author.name}`;
    const metaKeywords = postByAuthor[0].tags.toString().split(',').map(item => item.trim()).join(', ');
    const metaDescription = `${postByAuthor[0].author.name} is the author of the WSYNC Blog and has ${postByAuthor.length} story posts on various topics such as ${metaKeywords}`;

    // Check if no posts were found for the given tag
    useEffect(() => {
        if (postByAuthor[0].author.handle !== author) {
            // Redirect to the custom error page with a 404 status code
            router.push('/404');
        }
    }, [author, postByAuthor, router]);

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords}/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC Blog" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://www.wsync.xyz/api/og?title=${metaTitle}`} />
                <meta property="og:url" content={`https://www.wsync.xyz/${postByAuthor[0].author.handle}`} />
                <meta property="og:image:width" content="640" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={`https://www.wsync.xyz/api/og?title=${metaTitle}`} />
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
                    Story By @{author}
                </Heading>
                <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
                    {metaDescription}.
                </Text>
            </Stack>
            <BlogPostCard posts={postByAuthor} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }: any) {
    const postByAuthor = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'tags',
    ], params.author.handle)

    return {
        props: {
            postByAuthor,
        },
    };
}