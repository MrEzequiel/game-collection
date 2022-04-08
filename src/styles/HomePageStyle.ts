import styled from 'styled-components'

export const HomePageContainer = styled.div`
  max-width: 960px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;

  & > h2 {
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    position: relative;
    margin-bottom: 20px;

    &:after {
      content: '';
      position: absolute;
      bottom: -0px;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      z-index: -1;
      background-color: ${props => props.theme.colors.secundary};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  li {
    height: min-content;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.gray50};
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
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
    }
  }
`
