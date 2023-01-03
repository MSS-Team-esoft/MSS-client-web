import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {departmentActions} from "../slice/departmentSlice"

const addDepartmentAsync = async (data) => {
  return axios.post('/department/create', data).then(res => res.data)
}

export default function* callAddDepartmentSaga({payload}) {
  try {
    yield call(addDepartmentAsync, payload)
    yield put(departmentActions.addDepartmentSuccess())
  } catch (e) {
    console.error(e)
    yield put(departmentActions.addDepartmentFailure())
  }
}