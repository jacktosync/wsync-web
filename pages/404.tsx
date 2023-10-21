import Head from 'next/head'
import {
    Stack,
    Text,
    Container,
    Heading
} from '@chakra-ui/react';
import Footer from '@/component/footer';
import Navbar from '@/component/navbar';
import Subscribe from '@/component/Subscribe';
import ContactUs from '@/component/ContactUs';

export default function Custom404Pages() {

    return (
        <>
            <Head>
                <title>Page Not Found | WSYNC</title>
                <meta name="description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications. Proficient in ReactJS, NextJS and more. Let's bring your digital ideas to life!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content="WSYNC" />
                <meta property="og:title" content="Page Not Found | WSYNC" />
                <meta property="og:description" content="Experienced web developer specializing in creating dynamic and user-friendly websites and applications. Proficient in ReactJS, NextJS and more. Let's bring your digital ideas to life!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.wsync.xyz/images/wsync-text-logo.png" />
                <meta property="og:url" content="https://www.wsync.xyz" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://www.wsync.xyz/images/wsync-text-logo.png" />
                <meta property="twitter:site" content="@wsync_xyz" />
            </Head>
            <Navbar />
            <Container mt={16} p={{ base: 8, sm: 14 }} maxWidth={'4xl'}>
                <Stack textTransform={'capitalize'} direction="column" spacing={6} alignItems="center" mb={10}>
                    <Heading
                        fontSize={{ base: '120px', md: '220px' }}
                        fontWeight="bold"
                        textAlign="center"
                        maxW="600px"
                    >
                        404
                    </Heading>
                    <Text maxW="550px" mb={10} fontSize="xl" textAlign="center" color="gray.500">
                        Sorry, the page you were looking for was not found, return to the home page or subscribe to get the latest news on the topic you were looking for.
                    </Text>
                    <Subscribe />
                </Stack>
                <ContactUs />
            </Container>
            <Footer />
        </>
    )
}