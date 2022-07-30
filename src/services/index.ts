import { Http } from '@nativescript/core'

type Movies = {
  movies: Array<{
    year: number
    rating: string
    ranking: number
    idIMDB: string
    title: string
    urlPoster: string
  }>
}

interface MoviesResponse {
  data: Movies
}

export async function getMovies () {
  const API_KEY = '79216e60-59e4-4647-96fb-6e74201a74b5'

  const BASE_URL = `https://www.myapifilms.com/imdb/top?token=${API_KEY}&format=json&data=0`
  try {
    const response: MoviesResponse = await Http.getJSON(BASE_URL)
    return response.data.movies
  } catch {
    return 'Error'
  }
}