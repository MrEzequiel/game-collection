import styled, { css } from 'styled-components'

interface IGamePageStyle {
  hasImage: boolean
}

export const GameImage = styled.div<IGamePageStyle>`
  height: 80vh;
  overflow: hidden;
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
    z-index: 8;
    background: linear-gradient(
      90deg,
      #000000 -16.96%,
      rgba(0, 0, 0, 0) 63.08%
    );
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    display: block;
    height: 0;
    border-style: solid;
    border-width: 40px 0 0 100vw;
    border-color: transparent transparent transparent
      ${props => props.theme.colors.gray50};
    z-index: 15;
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
    z-index: 10;
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

    & > p {
      font-size: 1.6rem;
      color: ${props => props.theme.colors.gray500};
    }

    & > h1 {
      color: ${props => props.theme.colors.white};
      font-weight: 600;
      font-size: 3.2rem;
      line-height: 1.2;
      max-width: 450px;
    }
  }
`

export const GameInformations = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 40px;
`

export const GameTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  .icon-wrapper {
    position: relative;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`

interface IGameSectionProps {
  divider?: boolean
}

export const GameSection = styled.section<IGameSectionProps>`
  padding: 40px 0;
  ${props =>
    props.divider &&
    css`
      border-bottom: 1px solid ${props => props.theme.colors.gray100};
    `}
`

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: ${props => props.theme.colors.gray100};
  margin: 0 20px;
  border-radius: 1px;
`

export const GameDescription = styled(GameSection)`
  .description-container {
    p {
      line-height: 1.5em;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.gray500};
      margin-bottom: 10px;
      white-space: break-spaces;
    }

    h3 {
      font-size: 1.6rem;
      color: ${props => props.theme.colors.gray600};
      margin-bottom: 5px;
      padding-top: 5px;
    }
  }
`

export const GameAuthors = styled(GameSection)`
  .authors-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;

    .card-container {
      & > h4 {
        font-size: 1.4rem;
        color: ${props => props.theme.colors.gray400};
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 10px;

        li {
          padding: 10px;
          background: ${props => props.theme.colors.gray75};
          border: 1px solid ${props => props.theme.colors.gray100};
          border-radius: 5px;

          flex: 1;
          flex-basis: 150px;
          display: flex;
          gap: 10px;
          align-items: center;

          p {
            font-size: 1.6rem;
            line-height: 1.2;
            color: ${props => props.theme.colors.gray600};
          }

          .card-image {
            flex-shrink: 0;
            position: relative;
            width: 50px;
            height: 50px;
            border-radius: 3px;
            overflow: hidden;
            border: 1px solid ${props => props.theme.colors.gray50};
          }
        }
      }
    }
  }
`

export const SectionMetacriticAndInfo = styled(GameSection)`
  display: grid;
  grid-template-columns: 3fr auto 4fr;
  gap: 40px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    .divider {
      width: 100%;
      height: 1px;
      margin: 0;
    }
  }
`

export const MetacriticList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
`

export const InformationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InformationItem = styled.li`
  h4 {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.gray300};
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    line-height: 1.1;
    color: ${props => props.theme.colors.gray600};
  }
`

export const StoreContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  row-gap: 30px;
  padding-top: 10px;
`

export const StoreItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  background: ${props => props.theme.colors.gray75};
  border: 1px solid ${props => props.theme.colors.gray100};
  border-radius: 5px;

  .store-image {
    position: relative;
    top: -20px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .store-info {
    margin-top: -10px;
    text-align: center;

    a {
      color: ${props => props.theme.colors.gray400};
      font-size: 1.4rem;
    }
  }
`
