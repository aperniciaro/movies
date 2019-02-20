import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.movieName}</h2>
        <img
          src={
            'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
            this.props.moviePoster
          }
          alt="movie poster"
        />
        <p>{this.props.movieOverview}</p>
      </article>
    )
  }
}
export default Movie
