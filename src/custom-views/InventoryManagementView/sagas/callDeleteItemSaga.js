import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"

const deleteItemAsync = async (id) => {
  return axios.delete(`/inventory/remove/${id}`).then(res => res.data)
}

export default function* callDeleteItemSaga({payload}) {
  try {
    yield call(deleteItemAsync, payload.id)
    yield put(inventoryActions.deleteItemSuccess())
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.deleteItemFailure())
  }
}