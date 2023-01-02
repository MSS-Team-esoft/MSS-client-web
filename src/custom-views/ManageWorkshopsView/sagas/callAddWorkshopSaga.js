import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"

const addWorkshopAsync = async (data) => {
  return axios.post('/work-shop/create', data).then(res => res.data)
}

export default function* callAddWorkshopSaga({payload}) {
  try {
    yield call(addWorkshopAsync, payload.data)
    yield put(workshopActions.addWorkshopSuccess())
  } catch (e) {
    console.error(e)
    yield put(workshopActions.addWorkshopFailure())
  }
}