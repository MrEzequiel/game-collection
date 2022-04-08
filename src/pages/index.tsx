import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import IGame from '../interface/IGame'
import getGamesList from '../lib/getGamesList'
import { HomePageContainer } from '../styles/HomePageStyle'

export const getStaticProps: GetStaticProps = async () => {
  const gameResults = await getGamesList()

  return {
    props: {
      gameResults,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

interface IProps {
  gameResults: IGame[]
}

const Home: NextPage<IProps> = ({ gameResults }) => {
  return (
    <HomePageContainer>
      <h2>Top games</h2>

      <ul>
        {gameResults.map(game => (
          <li key={game.id}>
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
                  blurDataURL="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
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
          </li>
        ))}
      </ul>
    </HomePageContainer>
  )
}

export default Home
