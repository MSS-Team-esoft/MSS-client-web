import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {incomeActions} from "../slice/incomeReportSlice"

const uploadIncomeLogAsync = async (data) => {
  return axios.post('/income/upload-report', data).then(res => res.data)
}

export default function* callUploadIncomeLogSaga({payload}) {
  try {
    yield call(uploadIncomeLogAsync, payload.data)
    yield put(incomeActions.uploadIncomeSheetSuccess())
  } catch (e) {
    console.error(e)
    yield put(incomeActions.uploadIncomeSheetFailure())
  }
}