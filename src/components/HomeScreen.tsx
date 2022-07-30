import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-nativescript'
import { getMovies } from '../services'
import { Card } from './Card'

export function HomeScreen () {
  const [movies, setMovies] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  const handleGetMovies = async () => {
    const data = await getMovies()
    setMovies(data)
  }

  useEffect(() => {
    handleGetMovies().then(() => setIsLoading(false))
  }, [])

  return (
    <scrollView style={styles.container} orientation='vertical'>
      <flexboxLayout style={styles.content}>
        {isLoading && <label style={styles.text}>Loading...</label>}
        {movies.map((movie: any) => (
          <Card
            key={movie.idIMDB}
            title={movie.title}
            year={movie.year}
            urlPoster={movie.urlPoster}
            ranking={movie.ranking}
          />
        ))}
      </flexboxLayout>
    </scrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#eff3f7'
  },
  content: {
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#eff3f7'
  },
  text: {
    textAlignment: 'center',
    fontSize: 32,
    color: '#262626',
    fontWeight: 'bold',
  }
})