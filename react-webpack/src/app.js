'use strict'
// var React = require('react')
import React from 'react'
import Title from './Title'
// function sum(var1, var2) {
//   return var1 + var2
// }
// module.exports = sum
const App = React.createClass({
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
  render: function() {
    return(
      <div className="container">
        <Title name="João" lastname={{ first: 'Da', last: 'silva'}} />
        <label htmlFor="input" data-label="Label">Input</label>
        <input type="text" id="input" aria-hidden={true} />
      </div>
    )
  }
})
// module.exports = Title
export default App