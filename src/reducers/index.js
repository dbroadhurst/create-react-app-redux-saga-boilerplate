import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as testSaga } from '../sagas/testSaga/reducer'

const reducers = combineReducers({
  testSaga,
  form: formReducer
})

export default reducers
