import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"

const getItemsAsync = async () => {
  return axios.get(`/inventory/get-all/0`).then(res => res.data)
}

export default function* callGetStockSaga() {
  try {
    const response = yield call(getItemsAsync)
    yield put(inventoryActions.saveItems(response))
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.getItemsFailure())
  }
}