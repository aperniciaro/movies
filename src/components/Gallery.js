import React, { Component } from 'react'
import Movie from './Movie'
import data from '../1989.json'

console.log(data.results)

data.results.sort(function(a, b) {
  if (a.release_date < b.release_date) {
    return -1
  } else if (a.release_date > b.release_date_) {
    return 1
  } else {
    return 0
  }
})

class Gallery extends Component {
  render() {
    return (
      <main>
        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              movieName={movie.title}
              releaseDate={movie.release_date}
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
