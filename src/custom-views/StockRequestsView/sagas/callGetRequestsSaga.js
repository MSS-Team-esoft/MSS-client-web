import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {requestActions} from "../slice/requestSlice"

const getRequestsAsync = async () => {
  return axios.get(`/inventory/requests`).then(res => res.data)
}

export default function* callGetRequestsSaga() {
  try {
    const response = yield call(getRequestsAsync())
    yield put(requestActions.saveRequests(response))
  } catch (e) {
    console.error(e)
    yield put(requestActions.getRequestsFailure())
  }
}