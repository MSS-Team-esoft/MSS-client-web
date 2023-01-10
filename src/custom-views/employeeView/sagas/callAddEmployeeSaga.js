import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions} from "../slice/employeeSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const addEmployeeAsync = async (data) => {
  return axios.post('/employee/create', data).then(res => res.data)
}

export default function* callAddEmployeeSaga({payload}) {
  console.log(payload)
  try {
    yield call(addEmployeeAsync, payload)
    yield put(employeeActions.addEmployeeSuccess())
    yield put(employeeActions.getEmployees())
    successMessage('Create success!')
  } catch (e) {
    console.error(e)
    yield put(employeeActions.addEmployeeFailure())
    errorMessage('Something went wrong!')
  }
}
