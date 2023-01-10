import {takeLatest} from "redux-saga/effects"
import {createWorkActions} from "../slice/createWorkSlice"
import callGetDataSaga from "./callGetDataSaga"
import callCreateTaskSaga from "./callCreateTaskSaga"
import callGetsTasksSaga from "./callGetsTasksSaga"
import callChangeStateSaga from "./callChangeStateSaga"


export default function* createWorkSagas() {
  yield takeLatest(createWorkActions.getData, callGetDataSaga)
  yield takeLatest(createWorkActions.createTask, callCreateTaskSaga)
  yield takeLatest(createWorkActions.getTaskData, callGetsTasksSaga)
  yield takeLatest(createWorkActions.changeTaskStatus, callChangeStateSaga)
  yield takeLatest(createWorkActions.changeTaskStatusSuccess, callGetsTasksSaga)
}