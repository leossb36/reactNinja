'use strict'
// var React = require('react')
import React, { Component } from 'react'
import Title from './Title'
import Square from './square'
import Button from './button'
// function sum(var1, var2) {
//   return var1 + var2
// }
// module.exports = sum
// const App = React.createClass({
  // passando props como string
  // render: function() {
  //   return(
  //     <div className="container">
  //       <Title name="João" lastname="Lucas" />
  //       <label htmlFor="input" data-label="Label">Input</label>
  //       <input type="text" id="input" aria-hidden={true} />
  //     </div>
  //   )
  // }
// passando por expressão {}
//   render: function() {
//     return(
//       <div className="container">
//         <Title name="João" lastname="da silva" />
//         <label htmlFor="input" data-label="Label">Input</label>
//         <input type="text" id="input" aria-hidden={true} />
//       </div>
//     )
//   }
// })
// module.exports = Title

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'teste'
    }
  }
  
  render() {
    return(
      <div className="container" onClick={() => this.setState({
        text: 'outro Texto'
      })}>
        <Button>
          {this.state.text}
        </Button>
      </div>
    )
  }
}
export default App
// // <div className='container' onClick={function (e){
// //   alert('clicou')
// // }}>
// //   <Square />
//   {/* {['blue', 'red', 'green'].map((square) => ( */}
//     {/* // <Square key={square} color={square} /> */}
//   {/* ))} */}
// // </div>