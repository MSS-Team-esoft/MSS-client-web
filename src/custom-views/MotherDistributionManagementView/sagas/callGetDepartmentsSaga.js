import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {distributionActions} from "../slice/motherDistributionSlice"

const editDepartmentAsync = async () => {
  return axios.delete(`/department/fetch`).then(res => res.data)
}

export default function* callGetDepartmentsSaga() {
  try {
    const response = yield call(editDepartmentAsync)
    yield put(distributionActions.saveDepartments(response))
  } catch (e) {
    console.error(e)
    yield put(distributionActions.getDepartmentsFailure())
  }
}