import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as init } from '../sagas/testSaga/reducer'

const reducers = combineReducers({
  init,
  form: formReducer
})

export default reducers
