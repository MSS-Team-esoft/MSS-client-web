import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {departmentActions} from "../slice/departmentSlice"

const editDepartmentAsync = async () => {
  return axios.get(`/department/fetch`).then(res => res.data)
}

export default function* callGetDepartmentsSaga() {
  try {
    const response = yield call(editDepartmentAsync)
    yield put(departmentActions.saveDepartments(response))
  } catch (e) {
    console.error(e)
    yield put(departmentActions.getDepartmentsFailure())
  }
}