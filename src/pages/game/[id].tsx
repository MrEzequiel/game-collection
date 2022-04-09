import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import ISingleGame from '../../interface/ISingleGame'
import getGamesList from '../../lib/getGamesList'
import getIndividualGame from '../../lib/getIndividualGame'
import {
  Divider,
  GameAuthors,
  GameDescription,
  GameImage,
  GameInformations,
  GameSection,
  GameTitleContainer,
  InformationContainer,
  InformationItem,
  MetacriticList,
} from '../../styles/GamePageStyle'
import { MdDomain, MdTextSnippet, MdWysiwyg } from 'react-icons/md'
import { useTheme } from 'styled-components'
import MetacriticItem from '../../components/MetacriticItem'

export const getStaticPaths: GetStaticPaths = async () => {
  const gamesForStaticPaths = await getGamesList(6)

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
  console.log(game)
  const theme = useTheme()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [tagLimit, setTagLimit] = useState(5)

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
              placeholder="blur"
              blurDataURL="/placeholder.png"
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
              placeholder="blur"
              blurDataURL="/placeholder.png"
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

        <GameSection
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr auto 4fr',
            gap: '40px',
          }}
        >
          <div>
            <GameTitleContainer>
              <div className="icon-wrapper">
                <Image
                  src="/metacritic-icon.svg"
                  alt="metacritic"
                  layout="fill"
                />
              </div>
              <h2>Metacritic</h2>
            </GameTitleContainer>

            <MetacriticList>
              {game.metacritic_platforms.length === 0 && (
                <MetacriticItem
                  metascore={game.metacritic}
                  url={game.metacritic_url}
                />
              )}

              {game.metacritic_platforms.map(metacritic => (
                <MetacriticItem
                  {...metacritic}
                  key={metacritic.platform.slug}
                />
              ))}
            </MetacriticList>
          </div>

          <Divider />

          <div>
            <GameTitleContainer>
              <MdWysiwyg color={theme.colors.primary} fontSize="2rem" />
              <h2>Informations</h2>
            </GameTitleContainer>

            <InformationContainer>
              <InformationItem>
                <h4>Platforms</h4>

                <div>
                  {game.platforms.map((platform, index) => (
                    <span key={platform.platform.slug}>
                      {platform.platform.name}
                      {index === game.platforms.length - 1 ? '' : ', '}
                    </span>
                  ))}
                </div>
              </InformationItem>

              <InformationItem>
                <h4>Release Date</h4>
                <p>{new Date(game.released).toLocaleDateString()}</p>
              </InformationItem>

              <InformationItem>
                <h4>Genres</h4>
                <div>
                  {game.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index === game.genres.length - 1 ? '' : ', '}
                    </span>
                  ))}
                </div>
              </InformationItem>

              <InformationItem>
                <h4>Tags</h4>
                <div>
                  {game.tags.slice(1, tagLimit).map((tag, index) => (
                    <span key={tag.id}>
                      {tag.name}
                      {index === game.tags.slice(1, tagLimit).length - 1
                        ? ''
                        : ', '}
                    </span>
                  ))}
                </div>
                {game.tags.length > tagLimit && (
                  <span
                    style={{
                      color: theme.colors.secundary,
                      cursor: 'pointer',
                      display: 'block',
                      maxWidth: 'max-content',
                    }}
                    onClick={() => setTagLimit(prevLimit => prevLimit + 6)}
                  >
                    load more...
                  </span>
                )}
              </InformationItem>

              <InformationItem>
                <h4>ESRB Rating</h4>

                <p>{game.esrb_rating.name}</p>
              </InformationItem>
            </InformationContainer>
          </div>
        </GameSection>
      </GameInformations>
    </>
  )
}

export default GamePage
