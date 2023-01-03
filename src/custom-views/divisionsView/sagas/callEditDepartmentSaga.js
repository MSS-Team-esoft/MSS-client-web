import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {departmentActions} from "../slice/departmentSlice"

const editDepartmentAsync = async (id) => {
  return axios.patch(`/department/update/${id}`).then(res => res.data)
}

export default function* callEditDepartmentSaga({payload}) {
  try {
    yield call(editDepartmentAsync, payload.id)
    yield put(departmentActions.editDepartmentSuccess())
  } catch (e) {
    console.error(e)
    yield put(departmentActions.editDepartmentFailure())
  }
}