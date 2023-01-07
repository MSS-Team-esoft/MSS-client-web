import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const deleteWorkshopAsync = async (id) => {
  return axios.delete(`/workshop/delete/${id}`).then(res => res.data)
}

export default function* callDeleteWorkshopSaga({payload}) {
  try {
    yield call(deleteWorkshopAsync, payload.id)
    yield put(workshopActions.deleteWorkshopSuccess())
    successMessage('Delete success!')
  } catch (e) {
    console.error(e)
    yield put(workshopActions.deleteWorkshopFailure())
    errorMessage('Something went wrong!')
  }
}