import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"

const editItemAsync = async (id, data) => {
  return axios.put(`/inventory/update/${id}`, data).then(res => res.data)
}

export default function* callEditItemSaga({payload}) {
  try {
    yield call(editItemAsync, payload.data)
    yield put(inventoryActions.editItemSuccess())
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.editItemFailure())
  }
}