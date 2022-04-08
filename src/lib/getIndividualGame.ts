import api from '../services/api'

const getIndividualGame = async (id: string) => {
  const response = await api.get(`/games/${id}`)
  return response.data
}

export default getIndividualGame
