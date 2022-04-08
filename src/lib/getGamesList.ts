import IGame from '../interface/IGame'
import api from '../services/api'

const getGamesList = async (perPage = 50): Promise<IGame[]> => {
  const games = await api.get('/games', {
    params: {
      page_size: perPage,
    },
  })
  return games.data.results
}

export default getGamesList
