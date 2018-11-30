import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>React boilerplate !!!</h1>
      </div>
    )
  }
}
