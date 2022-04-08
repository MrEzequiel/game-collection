interface ISingleGame {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  description_raw: string
  metacritic: number
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
