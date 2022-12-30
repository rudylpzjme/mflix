import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: 'black',
      width: '100%',
      height: '100%',
      color: 'white',
    },
  },
}

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: styles,
})

export default theme
