import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {inventoryTrackingActions} from "../slice/inventoryTrackingSlice"

const getInventoryAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}
const getDashboardDataGoodAsync = async () => {
  return axios.get(`/inventory/get-all/1`).then(res => res.data)
}
const getDashboardDataWarningAsync = async () => {
  return axios.get(`/inventory/get-all/2`).then(res => res.data)
}
const getDashboardDataCriticalAsync = async () => {
  return axios.get(`/inventory/get-all/3`).then(res => res.data)
}
export default function* callGetInventoryDataSaga() {
  try {
    const good = yield call(getDashboardDataGoodAsync)
    const warning = yield call(getDashboardDataWarningAsync)
    const critical = yield call(getDashboardDataCriticalAsync)
    const inventory = yield call(getInventoryAsync)
    yield put(inventoryTrackingActions.saveDashboardDetails({
      good,
      warning,
      critical,
      inventory
    }))
  } catch (e) {
    console.error(e)
    yield put(inventoryTrackingActions.getDashboardDetailsFailure())
  }
}