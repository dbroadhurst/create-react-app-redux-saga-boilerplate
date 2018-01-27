import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'

class App extends Component {
  static propTypes = {
    init: PropTypes.func
  }

  render() {
    this.props.init()

    return (
      <div className="App">
        <h1>create-react-app-redux-saga-boilerplate</h1>
      </div>
    )
  }
}

export default App
