import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '@/library/blogApi'
import markdownToHtml from '@/library/markdownToHtml'
import type PostType from '@/interfaces/post'
import Post from '@/interfaces/post'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'
import { Container, Stack, Text, Image, Box, Heading, useBreakpointValue, Divider, IconProps, Icon } from '@chakra-ui/react'
import DateFormatter from '@/component/DateFormatter'
import PostBody from '@/component/PostBody'
import BlogPostCard from '@/component/BlogPostCard'
import AuthorCard from '@/component/AuthorCard'

type Props = {
    post: PostType;
    relatedPosts: Post[];
}


export default function Post({ post, relatedPosts }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }


    return (
        <>
            {router.isFallback ? (
                <Text>Loading…</Text>
            ) : (
                <>
                    <Head>
                        <title>{`${post.title} | WSYNC`}</title>
                        <meta name="description" content={post.excerpt} />
                        <meta name="keywords" content={post.tags.toString()} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
                        <link rel="manifest" href="/manifest.json" />
                        <link rel="canonical" href={`/blog/${post.slug}`} />
                        <meta property="og:site_name" content="WSYNC" />
                        <meta property="og:title" content={`${post.title} | WSYNC`} />
                        <meta property="og:description" content={post.excerpt} />
                        <meta property="og:type" content="article" />
                        <meta property="og:image" content={`https://www.wsync.xyz${post.ogImage}`} />
                        <meta property="og:url" content={`https://www.wsync.xyz/blog/${post.slug}`} />
                        <meta property="og:image:width" content="1280" />
                        <meta property="og:image:height" content="640" />
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:image" content={`https://www.wsync.xyz${post.ogImage}`} />
                        <meta property="twitter:site" content="@wsync_xyz" />
                    </Head>
                    <Navbar />
                    <Box >
                        <Container mt={10} p={{ base: 8, sm: 14 }} maxWidth={'4xl'}>
                            <Stack textTransform={'capitalize'} direction="column" spacing={6} alignItems="center" mb={10}>
                                <Heading
                                    fontSize={{ base: '4xl', sm: '5xl' }}
                                    fontWeight="bold"
                                    textAlign="center"
                                    maxW="600px"
                                >
                                    {post.title}
                                </Heading>
                                <Text maxW="550px" mb={2} fontSize="xl" textAlign="center" color="gray.500">
                                    {post.excerpt}
                                </Text>
                                <Text maxW="550px" mb={2} fontSize="xl" textAlign="center" color="gray.500">
                                    Published <DateFormatter dateString={post.date} />
                                </Text>
                            </Stack>
                            <Box mx={'auto'} mb={5}>
                                <Image rounded={'lg'}  width={'100%'} height={'350'} src={post.coverImage} alt={post.title} />
                            </Box>
                            <PostBody content={post.content} tags={post.tags as any} />
                            <Divider my={10} />
                            <AuthorCard
                                authors={{
                                    name: post.author.name,
                                    picture: post.author.picture,
                                    handle: post.author.handle,
                                    bio: post.author.bio,
                                    wallet: post.author.wallet
                                }}
                                share={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title}\n\nBy @wsync_xyz`)}&url=${encodeURIComponent(`\n\nhttps://wsync.xyz/blog/${post.slug}`)}`} />
                        </Container>
                        <Blur
                            position={'absolute'}
                            top={-10}
                            left={-10}
                            style={{ filter: 'blur(230px)' }}
                        />
                    </Box>
                    {relatedPosts.length > 0 && <BlogPostCard posts={relatedPosts} />}
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
    const post = getPostBySlug(params.slug, [
        'slug',
        'title',
        'excerpt',
        'tags',
        'coverImage',
        'date',
        'author',
        'ogImage',
        'content',
    ]);

    // Fetch related posts based on tags
    const relatedPosts = getAllPosts([
        'slug',
        'title',
        'excerpt',
        'tags',
        'coverImage',
        'date',
        'author',
    ]).filter(
        (relatedPost) =>
            relatedPost.slug !== post.slug &&
            relatedPost.tags.some((tag: any) => post.tags.includes(tag))
    );

    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
            relatedPosts, // Pass related posts as a prop
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
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