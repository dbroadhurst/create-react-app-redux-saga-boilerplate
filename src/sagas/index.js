import { all, fork } from 'redux-saga/effects'

import testSaga from './testSaga/saga'

export default function* root() {
  yield all([fork(testSaga)])
}
