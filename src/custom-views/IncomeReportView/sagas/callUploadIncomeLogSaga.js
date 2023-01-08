/* eslint-disable */
import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {incomeActions} from "../slice/incomeReportSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const uploadIncomeLogAsync = async (data) => {
  const formData = new FormData();
  formData.append("report", data)
  return axios.post('/income/upload-report', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }}).then(res => res.data)
}

export default function* callUploadIncomeLogSaga({payload}) {
  try {
    console.log(payload)
    yield call(uploadIncomeLogAsync, {report: payload})
    yield put(incomeActions.uploadIncomeSheetSuccess())
    successMessage('Upload success!')
  } catch (e) {
    console.error(e)
    yield put(incomeActions.uploadIncomeSheetFailure())
    errorMessage('Something went wrong!')
  }
}