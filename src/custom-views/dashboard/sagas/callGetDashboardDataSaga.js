import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {dashboardActions} from "../slice/dashboardSlice"

const getDashboardDataGoodAsync = async () => {
  return axios.get(`/inventory/get-all/1`).then(res => res.data)
}
const getDashboardDataWarningAsync = async () => {
  return axios.get(`/inventory/get-all/2`).then(res => res.data)
}
const getDashboardDataCriticalAsync = async () => {
  return axios.get(`/inventory/get-all/3`).then(res => res.data)
}

export default function* callGetDashboardDataSaga() {
  try {
    const good = yield call(getDashboardDataGoodAsync)
    const warning = yield call(getDashboardDataWarningAsync)
    const critical = yield call(getDashboardDataCriticalAsync)
    yield put(dashboardActions.saveDashboardDetails({
      good,
      warning,
      critical
    }))
  } catch (e) {
    console.error(e)
    yield put(dashboardActions.getDashboardDetailsFailure())
  }
}