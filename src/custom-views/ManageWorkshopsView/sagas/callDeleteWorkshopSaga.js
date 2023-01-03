import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"

const deleteWorkshopAsync = async (id) => {
  return axios.delete(`/work-shop/delete/${id}`).then(res => res.data)
}

export default function* callDeleteWorkshopSaga({payload}) {
  try {
    yield call(deleteWorkshopAsync, payload.id)
    yield put(workshopActions.deleteWorkshopSuccess())
  } catch (e) {
    console.error(e)
    yield put(workshopActions.deleteWorkshopFailure())
  }
}