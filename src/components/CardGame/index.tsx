import { FC, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CardGameWrapper } from './styles'
import IGame from '../../interface/IGame'

interface IProps {
  game: IGame
  index: number
}

const CardGame: FC<IProps> = ({ game, index }) => {
  const [isVisible, setIsVisible] = useState(true)
  const cardRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const callbackIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const observer = new IntersectionObserver(callbackIntersection, {
      rootMargin: '0px 0px -50px 0px',
    })

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <CardGameWrapper
      isVisible={isVisible}
      delayAnimation={index * 0.75}
      ref={cardRef}
    >
      <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
        <div className="image-game-cover">
          <Image
            src={game.background_image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality="30"
            placeholder="blur"
            blurDataURL="/placeholder.png"
            loading="lazy"
          />
        </div>
      </div>

      <div className="body-card-game">
        <span className="rating-game">{game.rating}</span>
        <h3>
          <Link href={`/game/${game.id}`}>{game.name}</Link>
        </h3>

        <div className="game-info">
          <p>
            <strong>Released</strong>
            <span>{new Date(game.released).toLocaleDateString()}</span>
          </p>
          <p>
            <strong>Genre</strong>
            <span>{game.genres[0].name}</span>
          </p>
        </div>
      </div>
    </CardGameWrapper>
  )
}

export default CardGame
