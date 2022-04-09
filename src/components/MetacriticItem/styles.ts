import styled from 'styled-components'

export const MetacriticItemWrapper = styled.div`
  padding: 10px;
  background: ${props => props.theme.colors.gray75};
  border: 1px solid ${props => props.theme.colors.gray100};
  border-radius: 5px;

  display: flex;
  flex: 1;
  gap: 10px;

  p {
    color: ${props => props.theme.colors.gray500};
    strong {
      color: ${props => props.theme.colors.gray600};
    }
  }

  a {
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${props => props.theme.colors.gray400};
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.colors.gray600};
    }
  }
`

interface MetacriticScoreProps {
  color: string
  fontColor: string
}

export const MetacriticScore = styled.div<MetacriticScoreProps>`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.color};
  font-size: 2.4rem;
  font-weight: 600;
  color: ${props => props.fontColor};
`
