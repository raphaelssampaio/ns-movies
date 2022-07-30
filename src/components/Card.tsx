import * as React from 'react'
import { StyleSheet } from 'react-nativescript'

interface CardProps {
  title: string
  urlPoster: string
  year: string
  ranking: number
}

export function Card ({ title, urlPoster, year, ranking }: CardProps) {
  return (
    <flexboxLayout style={styles.greatContainer}>
      <label style={styles.textRanking}>
        {ranking}
      </label>
      <flexboxLayout
        backgroundImage={urlPoster}
        backgroundSize='contain'
        style={styles.container}
      >
        <flexboxLayout style={styles.content}>
          <label style={styles.text}>
            {title || ''}
          </label>
          <label style={styles.text}>
            {year || ''}
          </label>
        </flexboxLayout>
      </flexboxLayout>
    </flexboxLayout>
  )
}

const styles = StyleSheet.create({
  greatContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },
  textRanking: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0046b8'
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    borderRadius: 20,
    padding: 60,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  content: {
    flexDirection: 'column',
    backgroundColor: '#262626',
    borderRadius: 20,
    padding: 10
  },
  text: {
    textAlignment: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
})
