import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/GlobalStyle'
import MainContainer from '../styles/MainContainer'
import darkTheme from '../styles/theme/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />

      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
