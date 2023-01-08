import {inventoryActions} from "../slice/inventorySlice"
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {errorMessage, successMessage} from "../../../utility/alerts"

const addItemAsync = async (data) => {
  return axios.post('/inventory/create', data).then(res => res.data)
}

export default function* callAddItemSaga({payload}) {
  try {
    yield call(addItemAsync, payload)
    yield put(inventoryActions.addItemSuccess())
    successMessage('Create success!')
  } catch (e) {
    console.error(e)
    yield put(inventoryActions.addItemFailure())
    errorMessage('Something went wrong!')
  }
}