import React, { Component } from 'react'
import Movie from './Movie'
import data from '../1989.json'

class Gallery extends Component {
  render() {
    return (
      <main>
        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              movieName={movie.title}
              moviePoster={movie.poster_path}
              movieOverview={movie.overview}
            />
          )
        })}
      </main>
    )
  }
}

export default Gallery
