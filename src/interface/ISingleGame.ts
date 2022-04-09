interface ISingleGame {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  description_raw: string

  metacritic: number
  metacritic_platforms: {
    metascore: number
    platform: {
      name: string
      platform: number
      slug: string
    }
    url: string
  }[]
  metacritic_url: string

  released: string
  tba: boolean
  updated: string
  background_image?: string
  background_image_additional?: string
  website: string
  rating: number
  rating_top: number
  ratings: {}
  added: number

  publishers: {
    games_count: number
    id: number
    image_background: string | null
    name: string
    slug: string
  }[]
  developers: {
    games_count: number
    id: number
    image_background: string | null
    name: string
    slug: string
  }[]

  genres: {
    games_count: number
    id: number
    image_background: string
    name: string
    slug: string
  }[]
  tags: {
    games_count: number
    id: number
    image_background: string
    language: string
    name: string
    slug: string
  }[]

  added_by_status: {
    [key in
      | 'beaten'
      | 'dropped'
      | 'owned'
      | 'playing'
      | 'toplay'
      | 'yet']: number
  }
  playtime: number // in hours

  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number

  esrb_rating: {
    id: number
    name: string
    slug: string
  }

  platforms: {
    platform: {
      games_count: number
      id: number
      image: string | null
      image_background: string | null
      name: string
      slug: string
    }
    released_at: string
  }[]
}

export default ISingleGame
