'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'teste'
    }
  }
  
  render() {

    var self = this
    return(
      <div className="container" onClick={() =>
        this.setState({
          text: 'outro Texto'      
      })}>
        {this.state.text}
      </div>
    )
  }
}
export default App