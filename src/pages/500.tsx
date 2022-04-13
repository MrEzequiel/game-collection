import { NextPage } from 'next'

import { VscServerProcess } from 'react-icons/vsc'
import { ErrorPageContainer } from '../styles/ErrorPage'

const Custom500: NextPage = () => {
  return (
    <ErrorPageContainer>
      <VscServerProcess fontSize={80} />
      <h1>500 - Internal Server Error</h1>
    </ErrorPageContainer>
  )
}

export default Custom500
