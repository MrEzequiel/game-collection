import styled, { css } from 'styled-components'

interface CardProps {
  isVisible: boolean
  delayAnimation: number
}

export const CardGameWrapper = styled.li<CardProps>`
  height: min-content;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray75};
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  ${props =>
    !props.isVisible &&
    css`
      opacity: 0;
      transform: perspective(100vmax) translateZ(30px) rotateX(10deg);
      transition-delay: ${props.delayAnimation}ms;
    `}

  ${props =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: scale(1) translateY(0);
      perspective: 0;
    `}


  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }

  .image-game-cover {
    position: relative;
    width: 100%;
    height: 100px;
    transition: transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      transform: scale(1.2);
    }
  }

  .body-card-game {
    padding: 10px;
    padding-bottom: 20px;

    .rating-game {
      width: min-content;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 8px;
      border-radius: 1000px;
      background: ${props => props.theme.colors.secundary};
      font-size: 1.4rem;
      font-weight: 600;
      box-shadow: 0 0 14px -4px ${props => props.theme.colors.secundary};
      margin-bottom: 8px;
    }

    & > h3 {
      line-height: 1.2;
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #1c1c1c;

      &:hover {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
      }
    }

    .game-info {
      display: grid;
      grid-template-columns: 1fr 1fr;

      p strong {
        color: ${props => props.theme.colors.gray200};
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 600;
        display: block;
        margin-bottom: 2px;
        letter-spacing: 0.05em;
      }

      p span {
        color: ${props => props.theme.colors.gray600};
      }
    }
  }
`
