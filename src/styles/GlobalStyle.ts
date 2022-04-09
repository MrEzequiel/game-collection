import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* nprogress lib style */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.primary};

    position: fixed;
    z-index: 1024;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${props =>
      props.theme.colors.primary}, 0 0 5px ${props =>
  props.theme.colors.primary};
    opacity: 1.0;

    transform: rotate(3deg) translate(0px, -4px);
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

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
