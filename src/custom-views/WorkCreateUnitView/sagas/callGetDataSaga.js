import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {createWorkActions} from "../slice/createWorkSlice"

const getItemsAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}

const getWorkersAsync = async () => {
  return axios.get(`/employee/fetch`).then(res => res.data)
}

export default function* callGetDataSaga() {
  try {
    const items = yield call(getItemsAsync)
    const workers = yield call(getWorkersAsync)
    yield put(createWorkActions.saveData({items, workers}))
  } catch (e) {
    console.error(e)
    yield put(createWorkActions.getDataFailure())
  }
}