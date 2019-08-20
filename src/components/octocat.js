import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <main class="prop-main">
        <li>
          <img
            class="prop-image"
            src={this.props.imageUrl}
            alt={this.props.imageAlt}
          />
        </li>
        <section class="prop-section">
          <h4 class="prop-number">{this.props.number}</h4>&nbsp;
          <h4>{this.props.contributor}</h4>
        </section>
      </main>
    )
  }
}

export default Octocat
