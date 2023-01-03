import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions} from "../slice/employeeSlice"

const deleteEmployeeAsync = async (id) => {
  return axios.delete(`/employee/delete/${id}`).then(res => res.data)
}

export default function* callDeleteEmployeeSaga({payload}) {
  try {
    yield call(deleteEmployeeAsync(), payload.id)
    yield put(employeeActions.deleteEmployeeSuccess())
  } catch (e) {
    console.error(e)
    yield put(employeeActions.deleteEmployeeFailure())
  }
}