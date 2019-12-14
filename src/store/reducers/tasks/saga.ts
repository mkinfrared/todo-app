import { all, fork, put, select, takeEvery } from "redux-saga/effects";

import {
  addTask,
  fetchTasksSuccess,
  makeTaskComplete
} from "store/reducers/tasks/actions";
import { getTaskSelector } from "store/reducers/tasks/selectors";
import { TasksActionTypes } from "store/reducers/tasks/types";
import api from "utils/api";

function* fetchTasksSaga() {
  try {
    const response = yield api.get("/tasks.json");
    const { data } = response;

    yield put(fetchTasksSuccess(data));
  } catch {}
}

function* watchFetchTasksSaga() {
  yield takeEvery(TasksActionTypes.FETCH_TASK_REQUEST, fetchTasksSaga);
}

function* addTaskSaga(action: ReturnType<typeof addTask>) {
  try {
    const { payload } = action;

    yield api.post("/tasks.json", payload);
    yield fetchTasksSaga();
  } catch {}
}

function* watchAddTaskSaga() {
  yield takeEvery(TasksActionTypes.ADD_TASK_REQUEST, addTaskSaga);
}

function* makeTaskCompleteSaga(action: ReturnType<typeof makeTaskComplete>) {
  const { payload } = action;
  const entry: ReturnType<typeof getTaskSelector> = yield select(state =>
    getTaskSelector(state, payload)
  );

  if (!entry) return;
  const [firebaseId, task] = entry;

  task.isComplete = true;

  try {
    yield api.put(`/tasks/${firebaseId}.json`, task);
    yield fetchTasksSaga();
  } catch {}
}

function* watchMakeTaskCompleteSaga() {
  yield takeEvery(
    TasksActionTypes.MAKE_TASK_COMPLETE_REQUEST,
    makeTaskCompleteSaga
  );
}

function* tasksSaga() {
  yield all([
    fork(watchAddTaskSaga),
    fork(watchFetchTasksSaga),
    fork(watchMakeTaskCompleteSaga)
  ]);
}

export default tasksSaga;
