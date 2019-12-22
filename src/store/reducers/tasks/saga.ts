import { all, fork, put, select, takeEvery } from "redux-saga/effects";

import {
  addTask,
  deleteTask,
  editTask,
  editTaskSuccess,
  fetchTasksSuccess,
  makeTaskComplete,
  makeTaskCompleteSuccess
} from "store/reducers/tasks/actions";
import {
  findTaskSelector,
  getTaskSelector
} from "store/reducers/tasks/selectors";
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
  const task: ReturnType<typeof getTaskSelector> = yield select(state =>
    findTaskSelector(state, payload)
  );

  const draftTask = { ...task, isComplete: true };

  try {
    yield api.put(`/tasks/${payload}.json`, draftTask);
    yield put(makeTaskCompleteSuccess(payload));
  } catch {}
}

function* watchMakeTaskCompleteSaga() {
  yield takeEvery(
    TasksActionTypes.MAKE_TASK_COMPLETE_REQUEST,
    makeTaskCompleteSaga
  );
}

function* editTaskSaga(action: ReturnType<typeof editTask>) {
  const { payload } = action;
  const { firebaseId, isComplete, name } = payload;
  const task: ReturnType<typeof getTaskSelector> = yield select(state =>
    getTaskSelector(state, firebaseId)
  );

  const draftTask = { ...task, isComplete, name };

  try {
    yield api.put(
      `/tasks/${payload.firebaseId}.json`,
      JSON.stringify(draftTask)
    );

    yield put(editTaskSuccess(firebaseId, draftTask));
  } catch {}
}

function* watchEditTaskSaga() {
  yield takeEvery(TasksActionTypes.UPDATE_TASK_REQUEST, editTaskSaga);
}

function* deleteTaskSaga(action: ReturnType<typeof deleteTask>) {
  const { payload } = action;

  try {
    yield api.delete(`/tasks/${payload}.json`);

    yield fetchTasksSaga();
  } catch {}
}

function* watchDeleteTaskSaga() {
  yield takeEvery(TasksActionTypes.DELETE_TASK_REQUEST, deleteTaskSaga);
}

function* tasksSaga() {
  yield all([
    fork(watchAddTaskSaga),
    fork(watchFetchTasksSaga),
    fork(watchMakeTaskCompleteSaga),
    fork(watchEditTaskSaga),
    fork(watchDeleteTaskSaga)
  ]);
}

export default tasksSaga;
