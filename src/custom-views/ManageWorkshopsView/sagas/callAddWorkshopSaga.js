import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const addWorkshopAsync = async (data) => {
  return axios.post('/workshop/create', data).then(res => res.data)
}

export default function* callAddWorkshopSaga({payload}) {
  try {
    yield call(addWorkshopAsync, payload)
    yield put(workshopActions.addWorkshopSuccess())
    successMessage('Create success!')
  } catch (e) {
    console.error(e)
    yield put(workshopActions.addWorkshopFailure())
    errorMessage('Something went wrong!')
  }
}