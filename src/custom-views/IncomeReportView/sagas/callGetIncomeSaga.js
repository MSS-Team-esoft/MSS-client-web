import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {incomeActions} from "../slice/incomeReportSlice"

const getIncomeLogs = async () => {
  return axios.get(`/income/fetch`).then(res => res.data)
}
const getTotalIncomeYear = async () => {
  return axios.get(`/income/current-year`).then(res => res.data)
}
const getTotalIncomeMonth = async () => {
  return axios.get(`/income/current-month`).then(res => res.data)
}
const getTotalIncomeStats = async () => {
  return axios.get(`/income/stats`).then(res => res.data)
}

export default function* callGetIncomeSaga() {
  try {
    const incomeLogs = yield call(getIncomeLogs)
    const totalIncomeYear = yield call(getTotalIncomeYear)
    const incomeMonth = yield call(getTotalIncomeMonth)
    const totalIncomeStats = yield call(getTotalIncomeStats)
    yield put(incomeActions.saveIncomeDetails({
      incomeLogs,
      totalIncomeYear,
      incomeMonth,
      totalIncomeStats
    }))
  } catch (e) {
    console.error(e)
    yield put(incomeActions.getIncomeLogsDetailsFailure())
  }
}