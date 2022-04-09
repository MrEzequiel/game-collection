import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import ISingleGame from '../../interface/ISingleGame'
import getGamesList from '../../lib/getGamesList'
import getIndividualGame from '../../lib/getIndividualGame'
import {
  GameDescription,
  GameImage,
  GameInformations,
} from '../../styles/GamePageStyle'
import { MdTextSnippet } from 'react-icons/md'
import { useTheme } from 'styled-components'

export const getStaticPaths: GetStaticPaths = async () => {
  const gamesForStaticPaths = await getGamesList(5)

  const paths = gamesForStaticPaths.map(game => ({
    params: {
      id: game.id.toString(),
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params!.id as string

  const game = await getIndividualGame(id)

  return {
    props: {
      game,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

interface IProps {
  game: ISingleGame
}

const GamePage: NextPage<IProps> = ({ game }) => {
  const theme = useTheme()
  console.log(game)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <GameImage
        hasImage={
          !!game.background_image &&
          !!game.background_image_additional &&
          imageLoaded
        }
      >
        {game.background_image_additional && (
          <div className="image-game-cover">
            <Image
              src={game.background_image_additional}
              alt={game.name}
              layout="fill"
              objectFit="cover"
              priority
              quality="80"
              onLoad={() => {
                setImageLoaded(true)
              }}
            />
          </div>
        )}

        {game.background_image && (
          <div className="image-game-cover">
            <Image
              src={game.background_image}
              alt={game.name}
              layout="fill"
              objectFit="cover"
              quality="80"
              priority
              onLoad={() => {
                setImageLoaded(true)
              }}
            />
          </div>
        )}

        <div className="title-game">
          <p>{game.developers[0].name}</p>
          <h1>{game.name}</h1>
        </div>
      </GameImage>

      <GameInformations>
        <GameDescription>
          <div className="title-container">
            <MdTextSnippet color={theme.colors.primary} fontSize="2rem" />
            <h2>Description</h2>
          </div>

          <div
            className="description-container"
            dangerouslySetInnerHTML={{
              __html: game.description,
            }}
          />
        </GameDescription>
      </GameInformations>
    </>
  )
}

export default GamePage
