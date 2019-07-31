'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'
class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }
  
  render() {

    var self = this
    return(
      <div >

        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}> Show / hide Timer</button>
        {/* <Square color = {this.state.color} />

        {['red', 'green', 'blue'].map((color) => (
          <Button 
            key={color} 
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))} */}
      </div>
    )
  }
}
export default App