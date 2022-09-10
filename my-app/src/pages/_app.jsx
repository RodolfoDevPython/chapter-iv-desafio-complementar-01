import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from '../server/miragejs'
import { theme } from '../styles/theme'
import "../styles/global.css"

makeServer({ environment: "development" })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
