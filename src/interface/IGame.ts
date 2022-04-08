interface IGame {
  added: number
  added_by_status: {
    beaten: number
    dropped: number
    owned: number
    playing: number
    toplay: number
    yet: number
  }
  background_image: string
  clip: null
  dominant_color: string
  esrb_rating: { id: string; name: string; slug: string }
  genres: {
    games_count: number
    id: number
    image_background: string
    name: string
    slug: string
  }[]
  id: number
  metacritic: number
  name: string
  playtime: number
  rating: number
  rating_top: number
  ratings: {
    id: number
    title: 'exceptional' | 'recommended' | 'meh' | 'skip'
    count: number
    percent: number
  }[]
  ratings_count: number
  released: string
  reviews_count: number
  reviews_text_count: number
  saturated_color: string
  short_screenshots: {
    id: number
    image: string
  }[]
  slug: string
  suggestions_count: number
  tags: {
    games_count: number
    id: number
    image_background: string
    language: string
    name: string
    slug: string
  }[]
  tba: false
  updated: string
  user_game: null
}

export default IGame
