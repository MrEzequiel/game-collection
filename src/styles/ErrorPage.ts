import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`
