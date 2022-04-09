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
      bottom: 3px;
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
    margin-bottom: 30px;
  }
`
