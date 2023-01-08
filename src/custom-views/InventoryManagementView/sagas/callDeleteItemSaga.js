import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {errorMessage, successMessage} from "../../../utility/alerts"

const deleteItemAsync = async (id) => {
  return axios.delete(`/inventory/remove/${id}`).then(res => res.data)
}

export default function* callDeleteItemSaga({payload}) {
  try {
    yield call(deleteItemAsync, payload.serial_number)
    yield put(inventoryActions.deleteItemSuccess())
    successMessage('Delete success!')
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.deleteItemFailure())
    errorMessage('Something went wrong!')
  }
}