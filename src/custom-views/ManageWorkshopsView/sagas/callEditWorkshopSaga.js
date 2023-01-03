import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"

const editWorkshopAsync = async (id) => {
  return axios.patch(`/work-shop/update/${id}`).then(res => res.data)
}

export default function* callEditWorkshopSaga({payload}) {
  try {
    yield call(editWorkshopAsync, payload.id)
    yield put(workshopActions.editWorkshopSuccess())
  } catch (e) {
    console.error(e)
    yield put(workshopActions.editWorkshopFailure())
  }
}