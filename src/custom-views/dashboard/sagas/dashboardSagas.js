import {takeLatest} from "redux-saga/effects"
import {dashboardActions} from "../slice/dashboardSlice"
import callGetDashboardDataSaga from "./callGetDashboardDataSaga"
import callGetStockReportSaga from "./callGetStockReportSaga"
import callGetIncomeReportSaga from "./callGetIncomeReportSaga"


export default function* dashboardSagas() {
  yield takeLatest(dashboardActions.getDashboardDetails, callGetDashboardDataSaga)
  yield takeLatest(dashboardActions.getStockReport, callGetStockReportSaga)
  yield takeLatest(dashboardActions.getIncomeReport, callGetIncomeReportSaga)
}