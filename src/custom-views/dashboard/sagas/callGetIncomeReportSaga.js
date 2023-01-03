import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {dashboardActions} from "../slice/dashboardSlice"

const getGetIncomeReportAsync = async () => {
  return axios.get(``, data).then(res => res.data)
}

export default function* callGetIncomeReportSaga() {
  try {
    const response = yield call(getGetIncomeReportAsync)
    yield put(dashboardActions.saveIncomeReport(response))
  } catch (e) {
    console.error(e)
    yield put(dashboardActions.getIncomeReportFailure())
  }
}