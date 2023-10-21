import Head from 'next/head'
import {
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import { getAllRepo } from '@/library/repoApi'
import Repo from '@/interfaces/repo'
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RepoPostCard from '@/component/RepoPostCard';

type Props = {
    repoByTag: Repo[]
}

export default function Framework({ repoByTag }: Props) {
    const router = useRouter();
    const { tags } = router.query;

    // Check if no posts were found for the given tag
    useEffect(() => {
        if (!repoByTag || repoByTag.length === 0) {
            // Redirect to the custom error page with a 404 status code
            router.push('/404');
        }
    }, [repoByTag, router]);

    return (
        <>
            <Head>
                <title>{`Some Portfolio Built Using ${tags} | WSYNC`}</title>
                <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC Portfolio" />
                <meta property="og:title" content={`Some Portfolio Built Using ${tags} | WSYNC`} />
                <meta property="og:description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://www.wsync.xyz/api/og?title=Explore all Portfolios based on ${tags} Frameworks`} />
                <meta property="og:url" content={`https://www.wsync.xyz/topic/${tags}`} />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={`https://www.wsync.xyz/api/og?title=Explore all Portfolios based on ${tags} Frameworks`} />
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
                    Some Portfolio Built using #{tags}!
                </Text>
            </Stack>
            <RepoPostCard repos={repoByTag} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }: any) {
    const repoByTag = getAllRepo([
        'slug',
        'title',
        'excerpt',
        'price',
        'demo',
        'seller',
        'tags',
        'date',
        'coverImage',
        'author',
        'ogImage',
    ], [params.tags])

    return {
        props: {
            repoByTag,
        },
    };
}