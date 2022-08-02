import { Http } from '@nativescript/core'

export interface MovieData {
  year: number
  rating: string
  ranking: number
  idIMDB: string
  title: string
  urlPoster: string
}

interface MoviesResponse {
  data: {
    movies: MovieData[]
  }
}

export async function getMovies() {
  const API_KEY = ''

  const BASE_URL = `https://www.myapifilms.com/imdb/top?token=${API_KEY}&format=json&data=0`
  try {
    const response: MoviesResponse = await Http.getJSON(BASE_URL)
    return response.data.movies
  } catch {
    return []
  }
}