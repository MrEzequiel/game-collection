import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HeaderContainer } from './styles'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <div>
        <Link href={'/'} passHref>
          <div className="logo-wrapper">
            <Image src="/logo.svg" alt="Logo" layout="fill" />
          </div>
        </Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
