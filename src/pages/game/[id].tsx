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
  SectionMetacriticAndInfo,
  StoreContainer,
  StoreItem,
} from '../../styles/GamePageStyle'
import {
  MdDomain,
  MdTextSnippet,
  MdWysiwyg,
  MdLocalGroceryStore,
} from 'react-icons/md'
import { useTheme } from 'styled-components'
import MetacriticItem from '../../components/MetacriticItem'
import Animation from '../../components/Animation'

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
              style={{ zIndex: 5 }}
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
              style={{ zIndex: imageLoaded ? 5 : -1 }}
              layout="fill"
              objectFit="cover"
              quality="80"
              priority
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
        <GameDescription divider>
          <GameTitleContainer>
            <Animation>
              <MdTextSnippet color={theme.colors.primary} fontSize="2rem" />
            </Animation>
            <Animation animationDuration={650}>
              <h2>Description</h2>
            </Animation>
          </GameTitleContainer>

          <div
            className="description-container"
            dangerouslySetInnerHTML={{
              __html: game.description,
            }}
          />
        </GameDescription>

        <GameAuthors divider>
          <GameTitleContainer>
            <Animation>
              <div className="icon-wrapper">
                <MdDomain color={theme.colors.primary} fontSize="2rem" />
              </div>
            </Animation>

            <Animation animationDuration={650}>
              <h2>Authors</h2>
            </Animation>
          </GameTitleContainer>

          <div className="authors-container">
            <div className="card-container">
              <h4>Developers</h4>

              <ul>
                {game.developers.map((developer, index) => (
                  <Animation
                    style={{ flex: 1, flexBasis: '150px' }}
                    key={developer.id}
                    animationDuration={500 + index * 100}
                  >
                    <li>
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
                  </Animation>
                ))}
              </ul>
            </div>

            <div className="card-container">
              <h4>Publishers</h4>
              <ul>
                {game.publishers.map((publisher, index) => (
                  <Animation
                    style={{ flex: 1, flexBasis: '150px' }}
                    key={publisher.id}
                    animationDuration={200 + index * 0.5}
                  >
                    <li>
                      {!!publisher.image_background && (
                        <div className="card-image">
                          <Image
                            src={publisher.image_background}
                            alt={publisher.name}
                            layout="fill"
                            objectFit="cover"
                            quality="30"
                          />
                        </div>
                      )}
                      <p>{publisher.name}</p>
                    </li>
                  </Animation>
                ))}
              </ul>
            </div>
          </div>
        </GameAuthors>

        <SectionMetacriticAndInfo divider>
          <div>
            <GameTitleContainer>
              <Animation>
                <div className="icon-wrapper">
                  <Image
                    src="/metacritic-icon.svg"
                    alt="metacritic"
                    layout="fill"
                  />
                </div>
              </Animation>

              <Animation animationDuration={650}>
                <h2>Metacritic</h2>
              </Animation>
            </GameTitleContainer>

            <MetacriticList>
              {game.metacritic_platforms.length === 0 && (
                <Animation>
                  <MetacriticItem
                    metascore={game.metacritic}
                    url={game.metacritic_url}
                  />
                </Animation>
              )}

              {game.metacritic_platforms.map((metacritic, index) => (
                <Animation
                  key={metacritic.platform.slug}
                  animationDuration={200 + index * 0.5}
                >
                  <MetacriticItem {...metacritic} />
                </Animation>
              ))}
            </MetacriticList>
          </div>

          <Divider className="divider" />

          <div>
            <GameTitleContainer>
              <Animation>
                <MdWysiwyg color={theme.colors.primary} fontSize="2rem" />
              </Animation>
              <Animation animationDuration={650}>
                <h2>Informations</h2>
              </Animation>
            </GameTitleContainer>

            <InformationContainer>
              <Animation animationDuration={750}>
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
              </Animation>

              <Animation animationDuration={850}>
                <InformationItem>
                  <h4>Release Date</h4>
                  <p>{new Date(game.released).toLocaleDateString()}</p>
                </InformationItem>
              </Animation>

              <Animation animationDuration={950}>
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
              </Animation>

              <Animation animationDuration={1050}>
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
              </Animation>

              <Animation animationDuration={1150}>
                <InformationItem>
                  <h4>ESRB Rating</h4>

                  <p>{game.esrb_rating.name}</p>
                </InformationItem>
              </Animation>
            </InformationContainer>
          </div>
        </SectionMetacriticAndInfo>

        <GameSection>
          <GameTitleContainer>
            <Animation>
              <MdLocalGroceryStore
                color={theme.colors.primary}
                fontSize="2rem"
              />
            </Animation>

            <Animation animationDuration={650}>
              <h2>Store</h2>
            </Animation>
          </GameTitleContainer>

          <StoreContainer>
            {game.stores.map((store, index) => (
              <Animation key={store.id} animationDuration={500 + index * 150}>
                <StoreItem>
                  <div className="store-image">
                    <Image
                      src={store.store.image_background}
                      alt={store.store.name}
                      layout="fill"
                      objectFit="cover"
                      quality="30"
                    />
                  </div>

                  <div className="store-info">
                    <h4>{store.store.name}</h4>
                    <a
                      href={`https://${store.store.domain}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      link to store
                    </a>
                  </div>
                </StoreItem>
              </Animation>
            ))}
          </StoreContainer>
        </GameSection>
      </GameInformations>
    </>
  )
}

export default GamePage
