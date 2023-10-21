import theme from '@/styles/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{fontFamily: 'Open Sans", sans-serif'}}>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
