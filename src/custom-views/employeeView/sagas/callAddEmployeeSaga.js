import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions} from "../slice/employeeSlice"

const addEmployeeAsync = async (data) => {
  return axios.post('/employee/create', data).then(res => res.data)
}

export default function* callAddEmployeeSaga({payload}) {
  try {
    yield call(addEmployeeAsync(), payload.data)
    yield put(employeeActions.addEmployeeSuccess())
  } catch (e) {
    console.error(e)
    yield put(employeeActions.addEmployeeFailure())
  }
}