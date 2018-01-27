import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header'

import './App.css'

class App extends Component {
  static propTypes = {
    init: PropTypes.func
  }

  render() {
    this.props.init()

    return (
      <div className="App">
        <Header />
        <h1>create-react-app-redux-saga-boilerplate</h1>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
