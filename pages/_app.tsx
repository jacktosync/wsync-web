import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from '@/styles/theme'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-EMPQ7276LR' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EMPQ7276LR');
        `}
      </Script>
    </ChakraProvider>
  )
}