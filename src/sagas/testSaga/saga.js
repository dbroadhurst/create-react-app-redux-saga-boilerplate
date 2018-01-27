import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'

let defaultState = {
  init: false
}

function* init() {
  yield put({
    type: actions.SET_STATE,
    payload: {
      ...defaultState,
      init: true
    }
  })
}

export default function* sagas() {
  yield takeLatest(actions.INIT, init)
}
