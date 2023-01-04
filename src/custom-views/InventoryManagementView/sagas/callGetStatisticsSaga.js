import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {errorMessage} from "../../../utility/alerts"

const getStatisticsAsync = async () => {
  return axios.get(`/inventory/statistics`).then(res => res.data)
}

export default function* callGetStatisticsSaga() {
  try {
    const response = yield call(getStatisticsAsync)
    yield put(inventoryActions.saveStock(response))
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.getStockFailure())
    errorMessage('Something went wrong!')
  }
}