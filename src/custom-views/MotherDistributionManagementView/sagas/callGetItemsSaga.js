import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {distributionActions} from "../slice/motherDistributionSlice"

const getItemsAsync = async () => {
  return axios.get(`/inventory/get-all/0`, data).then(res => res.data)
}

export default function* callGetStockSaga() {
  try {
    const response = yield call(getItemsAsync)
    yield put(distributionActions.saveItems(response))
  } catch (e) {
    console.error(e)
    yield put(distributionActions.getItemsFailure())
  }
}