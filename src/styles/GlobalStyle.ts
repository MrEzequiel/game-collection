import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  :root {
    scroll-behavior: smooth;
    /* hack to rem = px */
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.gray50};
    font-family: ${({ theme }) => theme.font};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray700};
  }

  button,
  input,
  textarea {
    border: none;
    color: inherit;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }
`
