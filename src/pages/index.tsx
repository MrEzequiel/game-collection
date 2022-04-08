import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import IGame from '../interface/IGame'
import getGamesList from '../lib/getGamesList'
import { HomePageContainer } from '../styles/HomePageStyle'

export const getStaticProps: GetStaticProps = async () => {
  const gameResults = await getGamesList()

  return {
    props: {
      gameResults,
    },
    revalidate: 60 * 60 * 3, // 3 hours
  }
}

interface IProps {
  gameResults: IGame[]
}

const Home: NextPage<IProps> = ({ gameResults }) => {
  console.log(gameResults)

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
                />
              </div>
            </div>

            <div className="body-card-game">
              <span className="rating-game">{game.rating}</span>
              <h3>{game.name}</h3>

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
