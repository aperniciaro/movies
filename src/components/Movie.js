import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.movieName}</h2>
        {/* <h3>
          {'Released on ' +
            this.props.releaseDate.slice(5, 2) +
            ' ' +
            this.props.releaseDate.slice(8, 2)}
        </h3> */}
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
