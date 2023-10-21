import Head from 'next/head'
import {
  Box
} from '@chakra-ui/react';
import { getAllPosts } from '@/library/blogApi'
import Post from '@/interfaces/post'
import BlogPostCard from '@/component/BlogPostCard';
import BlogHeroCard from '@/component/BlogHeroCard';
import Navbar from '@/component/navbar';
import Footer from '@/component/footer';

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>WSYNC Blog | Always Coding Always Learning</title>
        <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:site_name" content="WSYNC Blog" />
        <meta property="og:title" content="WSYNC Blog | Always Coding Always Learning" />
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
      <Box py={5}>
        {heroPost && (
          <BlogHeroCard
            title={heroPost.title}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
      </Box>
      {morePosts.length > 0 && <BlogPostCard posts={morePosts} />}
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}