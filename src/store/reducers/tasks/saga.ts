import { all, fork, put, takeEvery } from "redux-saga/effects";

import {
  addTask,
  addTaskSuccess,
  fetchTasksSuccess
} from "store/reducers/tasks/actions";
import { Task, TasksActionTypes } from "store/reducers/tasks/types";
import api from "utils/api";

function* addTaskSaga(action: ReturnType<typeof addTask>) {
  try {
    const { payload } = action;

    yield api.post("/tasks.json", payload);
    yield put(addTaskSuccess(payload));
  } catch {}
}

function* watchAddTaskSaga() {
  yield takeEvery(TasksActionTypes.ADD_TASK_REQUEST, addTaskSaga);
}

function* fetchTasksSaga() {
  try {
    const response = yield api.get("/tasks.json");
    const { data } = response;
    const tasks = Object.values<Task>(data);

    yield put(fetchTasksSuccess(tasks));
  } catch {}
}

function* watchFetchTasksSaga() {
  yield takeEvery(TasksActionTypes.FETCH_TASK_REQUEST, fetchTasksSaga);
}

function* tasksSaga() {
  yield all([fork(watchAddTaskSaga), fork(watchFetchTasksSaga)]);
}

export default tasksSaga;
