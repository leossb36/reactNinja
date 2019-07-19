'use strict'

import React from 'react'

const Title = React.createClass({
  // validação para padrão de uma props em caso de não ser passado uma propriedade
  getDefaultProps: function() {
    return {
      name: 'Desconhecido',
      lastname: {
        first: 'Sem',
        last: 'Sobrenome'
      }
    }
  },
  
  render: function() {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.last}!</h1>
    )
  }
})

export default Title