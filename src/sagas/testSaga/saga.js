import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'

let defaultState = {
  message: 'has not run'
}

function* init() {
  yield put({
    type: actions.SET_STATE,
    payload: {
      ...defaultState,
      message: 'has been run'
    }
  })
}

export default function* sagas() {
  yield takeLatest(actions.INIT, init)
}
