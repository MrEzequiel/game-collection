import axios from 'axios'

const baseURL = 'https://api.rawg.io/api'

const api = axios.create({
  baseURL,
})

api.interceptors.request.use(async config => {
  const apikey = process.env.NEXT_PUBLIC_API_KEY

  if (apikey) {
    config.params = {
      ...config.params,
      key: apikey,
    }
  }

  return config
})

export default api
