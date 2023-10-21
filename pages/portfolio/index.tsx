import Head from 'next/head'
import { Box } from '@chakra-ui/react';
import { getAllRepo } from '@/library/repoApi'
import Repo from '@/interfaces/repo'
import Footer from '@/component/footer';
import Navbar from '@/component/navbar';
import RepoHeroCard from '@/component/RepoHeroCard';
import RepoPostCard from '@/component/RepoPostCard';

type Props = {
    allRepo: Repo[]
}

export default function Portfolio({ allRepo }: Props) {
    const heroPost = allRepo[0]
    const morePosts = allRepo.slice(1)

    return (
        <>
            <Head>
                <title>Portfolio | WSYNC</title>
                <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC" />
                <meta property="og:title" content="Portfolio | WSYNC" />
                <meta property="og:description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.wsync.xyz/images/wsync-home-page.png" />
                <meta property="og:url" content="https://www.wsync.xyz" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://www.wsync.xyz/images/wsync-home-page.png" />
                <meta property="twitter:site" content="@wsync_xyz" />
            </Head>
            <Navbar />
            <Box py={5}>
                {heroPost && (
                    <RepoHeroCard
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        ogImage={heroPost.ogImage}
                        excerpt={heroPost.excerpt}
                        slug={heroPost.slug}
                        price={heroPost.price}
                        demo={heroPost.demo}
                    />
                )}
            </Box>
                {morePosts.length > 0 && <RepoPostCard repos={morePosts} />}
            <Footer />
        </>
    )
}

export const getStaticProps = async () => {
    const allRepo = getAllRepo([
        'title',
        'coverImage',
        'ogImage',
        'excerpt',
        'author',
        'slug',
        'price',
        'demo',
        'date',
    ])

    return {
        props: { allRepo },
    }
}