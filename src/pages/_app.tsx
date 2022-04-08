import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/GlobalStyle'
import MainContainer from '../styles/MainContainer'
import darkTheme from '../styles/theme/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Game Collection</title>
      </Head>

      <Header />

      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
