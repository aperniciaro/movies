import React, { Component } from 'react'

class Date extends Component {
  render() {
    const thisDate = this.props.releaseDate
    const releaseMonth = thisDate.slice(5, 7)
    const releaseDay = thisDate.slice(8, 10)
    //add decision trees to get months by name and ordinal days
    return <h3>{'Released on ' + releaseMonth + ' ' + releaseDay}</h3>
  }
}
export default Date
