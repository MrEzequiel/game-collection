import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.black};
  padding: 20px 0;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.2);

  & > div {
    max-width: 960px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2.4rem;
    }
  }

  .logo-wrapper {
    cursor: pointer;
    position: relative;
    width: 120px;
    height: 60px;
  }
`
