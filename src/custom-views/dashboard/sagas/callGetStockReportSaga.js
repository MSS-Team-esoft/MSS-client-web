import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {dashboardActions} from "../slice/dashboardSlice"

const getStockReportAsync = async () => {
  return axios.get(``).then(res => res.data)
}

export default function* callGetStockReportSaga() {
  try {
    const response = yield call(getStockReportAsync)
    yield put(dashboardActions.saveStockReport(response))
  } catch (e) {
    console.error(e)
    yield put(dashboardActions.getStockReportFailure())
  }
}