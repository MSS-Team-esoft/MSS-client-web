import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {dashboardActions} from "../slice/dashboardSlice"

const getDashboardDataAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}

export default function* callGetDashboardDataSaga() {
  try {
    const response = yield call(getDashboardDataAsync)
    yield put(dashboardActions.saveDashboardDetails(response))
  } catch (e) {
    console.error(e)
    yield put(dashboardActions.getDashboardDetailsFailure())
  }
}