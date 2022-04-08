import Link from 'next/link'
import { FC } from 'react'
import { HeaderContainer } from './styles'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>
          <Link href="/">Game Collection</Link>
        </h1>
      </div>
    </HeaderContainer>
  )
}

export default Header
