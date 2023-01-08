import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {distributionActions} from "../slice/motherDistributionSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const editDepartmentStockAsync = async (data) => {
  return axios.patch(``, data).then(res => res.data)
}

export default function* callEditDepartmentSaga({payload}) {
  try {
    yield call(editDepartmentStockAsync(), payload.id)
    yield put(distributionActions.updateDepartmentStockSuccess())
    successMessage('Update success!')
  } catch (e) {
    console.error(e)
    yield put(distributionActions.updateDepartmentsFailure())
    errorMessage('Something went wrong!')
  }
}