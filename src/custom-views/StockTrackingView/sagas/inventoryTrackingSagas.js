import {takeLatest} from "redux-saga/effects"
import {inventoryTrackingActions} from "../slice/inventoryTrackingSlice"
import callGetInventoryDataSaga from "./callGetInventoryDataSaga"


export default function* inventoryTrackingSagas() {
  yield takeLatest(inventoryTrackingActions.getDashboardDetails, callGetInventoryDataSaga)
}