import {takeLatest} from "redux-saga/effects"
import callAddEmployeeSaga from "./callAddEmployeeSaga"
import callDeleteEmployeeSaga from "./callDeleteEmployeeSaga"
import callEditEmployeeSaga from "./callEditEmployeeSaga"
import callGetEmployeesSaga from "./callGetEmployeesSaga"
import {employeeActions} from "../slice/employeeSlice"

export default function* employeeSagas() {
  yield takeLatest(employeeActions.addEmployee, callAddEmployeeSaga)
  yield takeLatest(employeeActions.deleteEmployee, callDeleteEmployeeSaga)
  yield takeLatest(employeeActions.editEmployee, callEditEmployeeSaga)
  yield takeLatest(employeeActions.getEmployees, callGetEmployeesSaga)
  yield takeLatest(employeeActions.editEmployeeSuccess, callGetEmployeesSaga)
  yield takeLatest(employeeActions.deleteEmployeeSuccess, callGetEmployeesSaga)
}