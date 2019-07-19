// console.log('webpack está funcionando!!')

'use strict'
// var React = require('react')
// var ReactDOM = require('react-dom')
import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader'
// var Title = require('./app')
// var sum = require('./app')

// console.log(sum(1,2))
// ReactDOM.render(
//   React.createElement(Title),
//   document.querySelector('[data-js="app"]')
// )
const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
  
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
  
}
