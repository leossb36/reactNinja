// console.log('webpack está funcionando!!')

'use strict'
var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./app')
// var sum = require('./app')

// console.log(sum(1,2))


ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)