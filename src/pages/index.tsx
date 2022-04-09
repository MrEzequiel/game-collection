import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import CardGame from '../components/CardGame'
import getGamesList from '../lib/getGamesList'

import IGame from '../interface/IGame'
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
        {gameResults.map((game, index) => (
          <CardGame key={game.id} game={game} index={index} />
        ))}
      </ul>
    </HomePageContainer>
  )
}

export default Home
