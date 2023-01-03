import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {inventoryTrackingActions} from "../slice/inventoryTrackingSlice"

const getInventoryAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}

export default function* callGetInventoryDataSaga() {
  try {
    const response = yield call(getInventoryAsync)
    yield put(inventoryTrackingActions.saveDashboardDetails(response))
  } catch (e) {
    console.error(e)
    yield put(inventoryTrackingActions.getDashboardDetailsFailure())
  }
}