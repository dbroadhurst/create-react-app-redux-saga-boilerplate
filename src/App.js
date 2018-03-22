import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from './routes'

import './App.css'

class App extends Component {
  static propTypes = {
    init: PropTypes.func
  }

  render() {
    this.props.init()

    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}

export default App
