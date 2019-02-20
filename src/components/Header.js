import React, { Component } from 'react'
import filmPic from '../images/film.jpg'

class Header extends Component {
  render() {
    return (
      <header>
        <img src={filmPic} alt="film stuff" />
        <h1>1989's Best Movies</h1>
        <img src={filmPic} alt="film stuff" />
      </header>
    )
  }
}

export default Header
