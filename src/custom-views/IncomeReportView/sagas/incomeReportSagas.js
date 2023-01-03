import {takeLatest} from "redux-saga/effects"
import {incomeActions} from "../slice/incomeReportSlice"
import callGetIncomeSaga from "./callGetIncomeSaga"
import callUploadIncomeLogSaga from "./callUploadIncomeLogSaga"


export default function* incomeReportSagas() {
  yield takeLatest(incomeActions.getIncomeDetails, callGetIncomeSaga)
  yield takeLatest(incomeActions.uploadIncomeSheet, callUploadIncomeLogSaga)
}