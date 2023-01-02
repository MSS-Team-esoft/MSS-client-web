import {takeLatest} from "redux-saga/effects"
import {requestActions} from "../slice/requestSlice"
import callGetRequestsSaga from "./callGetRequestsSaga"
import callChangeStateSaga from "./callChangeStateSaga"

export default function* requestSagas() {
  yield takeLatest(requestActions.getRequests, callGetRequestsSaga)
  yield takeLatest(requestActions.changeState, callChangeStateSaga)
}