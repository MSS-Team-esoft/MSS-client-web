import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {employeeActions} from "../slice/employeeSlice"

const editEmployeeAsync = async (id) => {
  return axios.patch(`/employee/update/${id}`).then(res => res.data)
}

export default function* callEditEmployeeSaga({payload}) {
  try {
    yield call(editEmployeeAsync(), payload.id)
    yield put(employeeActions.editEmployeeSuccess())
  } catch (e) {
    console.error(e)
    yield put(employeeActions.editEmployeeFailure())
  }
}