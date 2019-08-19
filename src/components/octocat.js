import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section>
          <h2>{this.props.number}</h2>
          <q>{this.props.contributor}</q>
        </section>
      </li>
    )
  }
}

export default Character
