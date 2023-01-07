import {call, put, select} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {selectWorkshopCurrentlyEditingData, workshopActions} from "../slice/workshopSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const editWorkshopAsync = async (data, id) => {
  return axios.patch(`/workshop/update/${id}`, data).then(res => res.data)
}

export default function* callEditWorkshopSaga({payload}) {
  const editing = yield select(selectWorkshopCurrentlyEditingData)
  try {
    yield call(editWorkshopAsync, payload, editing.id)
    yield put(workshopActions.editWorkshopSuccess())
    successMessage('Edit success!')
  } catch (e) {
    console.error(e)
    yield put(workshopActions.editWorkshopFailure())
    errorMessage('Something went wrong!')
  }
}