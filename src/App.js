import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers.js'

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    )
  }
}

export default App
