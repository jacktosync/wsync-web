import { ColorMode, extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Extend the theme
const theme = extendTheme({
  config, 
  styles: {
    global: (props: { colorMode: ColorMode }) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#101112' : 'white', // Change background color for dark mode
      },
    }),
  },
})

export default theme;