import {takeLatest} from "redux-saga/effects"
import callAddWorkshopSaga from "./callAddWorkshopSaga"
import callDeleteWorkshopSaga from "./callDeleteWorkshopSaga"
import callEditWorkshopSaga from "./callEditWorkshopSaga"
import callGetWorkshopsSaga from "./callGetWorkshopsSaga"
import {workshopActions} from "../slice/workshopSlice"

export default function* workshopSagas() {
  yield takeLatest(workshopActions.addWorkshop, callAddWorkshopSaga)
  yield takeLatest(workshopActions.deleteWorkshop, callDeleteWorkshopSaga)
  yield takeLatest(workshopActions.editWorkshop, callEditWorkshopSaga)
  yield takeLatest(workshopActions.getWorkshops, callGetWorkshopsSaga)
  yield takeLatest(workshopActions.editWorkshopSuccess, callGetWorkshopsSaga)
  yield takeLatest(workshopActions.deleteWorkshopSuccess, callGetWorkshopsSaga)
}