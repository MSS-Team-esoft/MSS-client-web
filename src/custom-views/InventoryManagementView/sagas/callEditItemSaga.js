import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {errorMessage, successMessage} from "../../../utility/alerts"

const editItemAsync = async (id, data) => {
  return axios.put(`/inventory/update/${id}`, data).then(res => res.data)
}

export default function* callEditItemSaga({payload}) {
  try {
    yield call(editItemAsync, payload.serial_number, payload)
    yield put(inventoryActions.editItemSuccess())
    successMessage('Update success!')
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.editItemFailure())
    errorMessage('Something went wrong!')
  }
}