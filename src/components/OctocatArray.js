import React, { Component } from 'react'
import Octocat from './Octocat'

import boxer from '../images/boxertocat_octodex.jpg'
import brenna from '../images/Brennatocat.png'
import daftPunk from '../images/daftpunktocat-thomas.gif'
import film from '../images/filmtocats.png'
import flint from '../images/Fintechtocat.png'
import investocat from '../images/privateinvestocat.jpg'
import mona from '../images/mona-lovelace.jpg'
import sentry from '../images/Sentrytocat_octodex.jpg'

const octocats = [
  {
    number: '#133:',
    contributor: 'mona-lovelace',
    imageUrl: mona,
    imageAlt: 'Mona Lovelace'
  },
  {
    number: '#143:',
    contributor: 'boxertocat_octodex',
    imageUrl: boxer,
    imageAlt: 'Boxer to Cat Octodex'
  },
  {
    number: '#147:',
    contributor: 'Brennatocat',
    imageUrl: brenna,
    imageAlt: 'Brenna to Cat'
  },
  {
    number: '#102:',
    contributor: 'daftpunktocat-thomas',
    imageUrl: daftPunk,
    imageAlt: 'daft punk thomas gif'
  },
  {
    number: '#146:',
    contributor: 'filmtocats',
    imageUrl: film,
    imageAlt: 'film to Cat'
  },
  {
    number: '#148:',
    contributor: 'Fintechtocat',
    imageUrl: flint,
    imageAlt: 'Fintech to Cat'
  },
  {
    number: '#122:',
    contributor: 'privateinvestocat',
    imageUrl: investocat,
    imageAlt: 'Private invest to Cat'
  },
  {
    number: '#145:',
    contributor: 'sentrytocat_octodex',
    imageUrl: sentry,
    imageAlt: 'sentry to Cat'
  }
]

class OctocatArray extends Component {
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
        <ul>
          {octocats.map(octocat => {
            return (
              <Octocat
                number={octocat.number}
                contributor={octocat.contributor}
                imageAlt={octocat.imageAlt}
                imageUrl={octocat.imageUrl}
              />
            )
          })}
        </ul>
      </main>
    )
  }
}

export default OctocatArray
