import {call, put, select} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {departmentActions, selectDepartmentCurrentlyEditingData} from "../slice/departmentSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const editDepartmentAsync = async (data, id) => {
  return axios.patch(`/department/update/${id}`, data).then(res => res.data)
}

export default function* callEditDepartmentSaga({payload}) {
  const editing = yield select(selectDepartmentCurrentlyEditingData)
  try {
    yield call(editDepartmentAsync, payload, editing.id)
    yield put(departmentActions.editDepartmentSuccess())
    successMessage('Edit success!')
  } catch (e) {
    console.error(e)
    yield put(departmentActions.editDepartmentFailure())
    errorMessage('Something went wrong!')
  }
}