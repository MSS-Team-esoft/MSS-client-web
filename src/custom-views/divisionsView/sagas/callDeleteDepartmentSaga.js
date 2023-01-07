import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {departmentActions} from "../slice/departmentSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const deleteDepartmentAsync = async (id) => {
  return axios.delete(`/department/delete/${id}`).then(res => res.data)
}

export default function* callDeleteDepartmentSaga({payload}) {
  try {
    yield call(deleteDepartmentAsync, payload.id)
    yield put(departmentActions.deleteDepartmentSuccess())
    successMessage('Delete success!')
  } catch (e) {
    console.error(e)
    yield put(departmentActions.deleteDepartmentFailure())
    errorMessage('Something went wrong!')
  }
}