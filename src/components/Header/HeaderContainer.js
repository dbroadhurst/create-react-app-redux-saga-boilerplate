import { connect } from 'react-redux'

import HeaderComponent from './Header'

import { init } from '../../sagas/testSaga/reducer'

const mapStatetoProps = state => {
  return {
    testSaga: state.testSaga
  }
}

const mapDispatchToProps = dispatch => {
  return {
    testInit: () => {
      dispatch(init())
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(HeaderComponent)
