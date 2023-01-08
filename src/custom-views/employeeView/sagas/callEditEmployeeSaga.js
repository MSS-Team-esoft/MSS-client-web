import {call, put, select} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions, selectEmployeeCurrentlyEditingData} from "../slice/employeeSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const editEmployeeAsync = async (data, id) => {
  return axios.patch(`/employee/update/${id}`, data).then(res => res.data)
}

export default function* callEditEmployeeSaga({payload}) {
  const editing = yield select(selectEmployeeCurrentlyEditingData)
  try {
    yield call(editEmployeeAsync(), payload, editing.id)
    yield put(employeeActions.editEmployeeSuccess())
    successMessage('Edit success!')
  } catch (e) {
    console.error(e)
    yield put(employeeActions.editEmployeeFailure())
    errorMessage('Something went wrong!')
  }
}