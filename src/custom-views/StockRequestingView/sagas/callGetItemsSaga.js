import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {requestingActions} from "../slice/requestingSlice"

const getItemsAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}

export default function* callGetItemsSaga() {
  try {
    const response = yield call(getItemsAsync)
    yield put(requestingActions.saveItems(response))
  } catch (e) {
    console.error(e)
    yield put(requestingActions.getItemsFailure())
  }
}