import styled, { css } from 'styled-components'

interface IGamePageStyle {
  hasImage: boolean
}

export const GameImage = styled.div<IGamePageStyle>`
  height: 80vh;
  position: relative;
  background: ${props => props.theme.colors.black};

  @keyframes imageFadeIn {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    background: linear-gradient(
      90deg,
      #000000 -16.96%,
      rgba(0, 0, 0, 0) 63.08%
    );
  }

  .image-game-cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-game-cover:first-child {
    ${props =>
      props.hasImage &&
      css`
        animation-name: imageFadeIn;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 8s;
        animation-direction: alternate;
      `}
  }

  .image-game-cover:nth-child(2) {
    ${props =>
      props.hasImage &&
      css`
        animation-name: imageFadeIn;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 8s;
        animation-delay: 8s;
        animation-direction: alternate;
      `}
  }

  .title-game {
    overflow: hidden;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 100%;

    @keyframes show-left {
      from {
        opacity: 0;
        transform: translateX(-100%) scale(0.6);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }
    }

    animation: show-left 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    max-width: 960px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > h2 {
      color: ${props => props.theme.colors.white};
      font-weight: 600;
      font-size: 3.2rem;
      line-height: 1.2;
      max-width: 450px;
    }
  }
`
