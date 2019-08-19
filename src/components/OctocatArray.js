import React, { Component } from 'react'
import Octocat from './Octocat'

import boxer from '../images/boxertocat_octodex.jpg'
import brenna from '../images/Brennatocat.png'
import daftPunk from '../images/daftpunktocat-thomas.gif'
import film from '../images/filmtocats.png'
import flint from '../images/Fintechtocat.png'
import investocat from '../images/privateinvestocat.jpg'
import puddle from '../images/puddle_jumper_octodex.jpg'
import sentry from '../images/Sentrytocat_octodex.jpg'

const octocats = [
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
    number: '#147:',
    contributor: 'filmtocats',
    imageUrl: film,
    imageAlt: 'film to Cat'
  },
  {
    number: '#147:',
    contributor: 'Fintechtocat',
    imageUrl: flint,
    imageAlt: 'Fintech to Cat'
  },
  {
    number: '#147:',
    contributor: 'privateinvestocat',
    imageUrl: investocat,
    imageAlt: 'Private invest to Cat'
  },
  {
    number: '#147:',
    contributor: 'puddle_jumper_octodex',
    imageUrl: puddle,
    imageAlt: 'puddle jumper octodex'
  },
  {
    number: '#147:',
    contributor: 'sentrytocat_octodex',
    imageUrl: sentry,
    imageAlt: 'sentry to Cat'
  }
]

class OctocatArray extends Component {
  render() {
    return (
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
    )
  }
}

export default OctocatArray
