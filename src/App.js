import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <main>
        <nav class="nav-bar">
          <div class="left-side-nav-bar">
            <i class="fab fa-github" />
            <a href="#" class="octodex">
              Octodex
            </a>
            <a href="#" class="home">
              Home
            </a>
            <a href="#" class="faq">
              FAQ
            </a>
          </div>
          <div class="right-side-nav-bar">
            <a href="#" class="follow-twitter">
              Follow us on Twitter
            </a>
            <a href="#" class="back-to-git">
              Back to GitHub.com
            </a>
          </div>
        </nav>
      </main>
    )
  }
}

export default App
