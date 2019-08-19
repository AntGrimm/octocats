import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section class="prop-section">
          <h3 class="prop-number">{this.props.number}</h3>&nbsp;
          <h3>{this.props.contributor}</h3>
        </section>
      </li>
    )
  }
}

export default Octocat
