import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import ISingleGame from '../../interface/ISingleGame'
import getGamesList from '../../lib/getGamesList'
import getIndividualGame from '../../lib/getIndividualGame'
import {
  GameAuthors,
  GameDescription,
  GameImage,
  GameInformations,
  GameTitleContainer,
} from '../../styles/GamePageStyle'
import { MdDomain, MdTextSnippet } from 'react-icons/md'
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
          <GameTitleContainer>
            <MdTextSnippet color={theme.colors.primary} fontSize="2rem" />
            <h2>Description</h2>
          </GameTitleContainer>

          <div
            className="description-container"
            dangerouslySetInnerHTML={{
              __html: game.description,
            }}
          />
        </GameDescription>

        <GameAuthors>
          <GameTitleContainer>
            <MdDomain color={theme.colors.primary} fontSize="2rem" />
            <h2>Authors</h2>
          </GameTitleContainer>

          <div className="authors-container">
            <div className="card-container">
              <h4>Developers</h4>

              <ul>
                {game.developers.map(developer => (
                  <li key={developer.id}>
                    {!!developer.image_background && (
                      <div className="card-image">
                        <Image
                          src={developer.image_background}
                          alt={developer.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    <p>{developer.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-container">
              <h4>Publishers</h4>
              <ul>
                {game.publishers.map(publisher => (
                  <li key={publisher.id}>
                    {!!publisher.image_background && (
                      <div className="card-image">
                        <Image
                          src={publisher.image_background}
                          alt={publisher.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    <p>{publisher.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GameAuthors>
      </GameInformations>
    </>
  )
}

export default GamePage
