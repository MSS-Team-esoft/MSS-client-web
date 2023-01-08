import {takeLatest} from "redux-saga/effects"
import {createWorkActions} from "../slice/createWorkSlice"
import callGetDataSaga from "./callGetDataSaga"
import callCreateTaskSaga from "./callCreateTaskSaga"


export default function* departmentSagas() {
  yield takeLatest(createWorkActions.getData, callGetDataSaga)
  yield takeLatest(createWorkActions.createTask, callCreateTaskSaga)
}