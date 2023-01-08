import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions} from "../slice/employeeSlice"

const editEmployeeAsync = async () => {
  return axios.get(`/employee/fetch`).then(res => res.data)
}

export default function* callGetEmployeesSaga() {
  try {
    const response = yield call(editEmployeeAsync)
    yield put(employeeActions.saveEmployees(response))
  } catch (e) {
    console.error(e)
    yield put(employeeActions.getEmployeeFailure())
  }
}