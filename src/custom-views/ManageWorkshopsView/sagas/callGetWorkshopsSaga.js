import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {workshopActions} from "../slice/workshopSlice"

const editWorkshopAsync = async () => {
  return axios.delete(`/work-shop/fetch`).then(res => res.data)
}

export default function* callGetWorkshopsSaga() {
  try {
    const response = yield call(editWorkshopAsync)
    yield put(workshopActions.saveWorkshops(response))
  } catch (e) {
    console.error(e)
    yield put(workshopActions.getWorkshopFailure())
  }
}