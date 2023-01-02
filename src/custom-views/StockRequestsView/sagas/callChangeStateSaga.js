import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {requestActions} from "../slice/requestSlice"

const changeStateRequestsAsync = async (data) => {
  return axios.patch(`/inventory/requests`, data).then(res => res.data)
}

export default function* callChangeStateSaga({payload}) {
  try {
    yield call(changeStateRequestsAsync(payload.data))
    yield put(requestActions.changeStateSuccess())
  } catch (e) {
    console.error(e)
    yield put(requestActions.changeStateFailure())
  }
}