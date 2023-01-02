import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"

const addItemAsync = async (data) => {
  return axios.post('/inventory/create', data).then(res => res.data)
}

export default function* callAddItemSaga({payload}) {
  try {
    yield call(addItemAsync, payload.data)
    yield put(inventoryActions.addItemSuccess())
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.addItemFailure())
  }
}