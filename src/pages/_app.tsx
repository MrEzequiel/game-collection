import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/GlobalStyle'
import darkTheme from '../styles/theme/dark'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Game Collection</title>
      </Head>

      <Header />

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
