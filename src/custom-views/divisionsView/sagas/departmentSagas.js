import {takeLatest} from "redux-saga/effects"
import {departmentActions} from "../slice/departmentSlice"
import callAddDepartmentSaga from "./callAddDepartmentSaga"
import callDeleteDepartmentSaga from "./callDeleteDepartmentSaga"
import callEditDepartmentSaga from "./callEditDepartmentSaga"
import callGetDepartmentsSaga from "./callGetDepartmentsSaga"

export default function* departmentSagas() {
  yield takeLatest(departmentActions.addDepartment, callAddDepartmentSaga)
  yield takeLatest(departmentActions.deleteDepartment, callDeleteDepartmentSaga)
  yield takeLatest(departmentActions.editDepartment, callEditDepartmentSaga)
  yield takeLatest(departmentActions.getDepartments, callGetDepartmentsSaga)
  yield takeLatest(departmentActions.addDepartmentSuccess, callGetDepartmentsSaga)
  yield takeLatest(departmentActions.editDepartmentSuccess, callGetDepartmentsSaga)
  yield takeLatest(departmentActions.deleteDepartmentSuccess, callGetDepartmentsSaga)
}