import {takeLatest} from "redux-saga/effects"
import {requestingActions} from "../slice/requestingSlice"
import callGetItemsSaga from "./callGetItemsSaga"
import callGetRequestsSaga from "./callGetRequestsSaga"
import callRequestStockSaga from "./callRequestStockSaga"

export default function* requestingSagas() {
  yield takeLatest(requestingActions.getItems, callGetItemsSaga)
  yield takeLatest(requestingActions.getRequests, callGetRequestsSaga)
  yield takeLatest(requestingActions.makeRequest, callRequestStockSaga)
}