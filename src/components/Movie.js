import React, { Component } from 'react'

class Movie extends Component {
  render() {
    const thisDate = this.props.releaseDate
    const releaseMonth = thisDate.slice(5, 7)
    const releaseDay = thisDate.slice(8, 10)
    return (
      <article>
        <h2>{this.props.movieName}</h2>
        <h3>{'Released on ' + releaseMonth + ' ' + releaseDay}</h3>
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
