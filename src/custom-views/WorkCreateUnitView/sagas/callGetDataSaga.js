import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {createWorkActions} from "../slice/createWorkSlice"

const getWorkersAsync = async () => {
  return axios.get(`/employee/fetch`).then(res => res.data)
}

export default function* callGetDataSaga() {
  try {
    const response = yield call(getWorkersAsync)
    yield put(createWorkActions.saveData(response))
  } catch (e) {
    console.error(e)
    yield put(createWorkActions.getDataFailure())
  }
}