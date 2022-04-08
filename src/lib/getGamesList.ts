import api from '../services/api'

const getGamesList = async () => {
  const games = await api.get('/games', {
    params: {
      page_size: 50,
    },
  })
  return games.data.results
}

export default getGamesList
