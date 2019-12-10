import { all, fork } from "redux-saga/effects";

import tasksSaga from "store/reducers/tasks/saga";

function* rootSaga() {
  yield all([fork(tasksSaga)]);
}

export default rootSaga;
