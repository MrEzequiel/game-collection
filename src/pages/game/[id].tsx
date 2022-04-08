import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import ISingleGame from '../../interface/ISingleGame'
import getGamesList from '../../lib/getGamesList'
import getIndividualGame from '../../lib/getIndividualGame'
import { GameImage } from '../../styles/GamePageStyle'

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
  }
}

interface IProps {
  game: ISingleGame
}

const GamePage: NextPage<IProps> = ({ game }) => {
  console.log(game)

  return (
    <GameImage
      hasImage={!!game.background_image && !!game.background_image_additional}
    >
      {game.background_image && (
        <div className="image-game-cover">
          <Image
            src={game.background_image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            quality="80"
            priority
          />
        </div>
      )}

      {game.background_image_additional && (
        <div className="image-game-cover">
          <Image
            src={game.background_image_additional}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            priority
            quality="80"
          />
        </div>
      )}

      <div className="title-game">
        <h2>{game.name}</h2>
      </div>
    </GameImage>
  )
}

export default GamePage
