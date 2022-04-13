import { NextPage } from 'next'
import { VscBracketError } from 'react-icons/vsc'
import { ErrorPageContainer } from '../styles/ErrorPage'

const Custom404: NextPage = () => {
  return (
    <ErrorPageContainer>
      <VscBracketError fontSize={80} />
      <h1>404 - Not found</h1>
    </ErrorPageContainer>
  )
}

export default Custom404
