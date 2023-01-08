import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {errorMessage, successMessage} from "../../../utility/alerts"
import {createWorkActions} from "../slice/createWorkSlice"

const addDepartmentAsync = async (data) => {
  return axios.post(' /work-monitoring/task/create', data).then(res => res.data)
}

export default function* callCreateTaskSaga({payload}) {
  try {
    yield call(addDepartmentAsync, payload)
    yield put(createWorkActions.createTaskSuccess())
    successMessage('Create success!')
  } catch (e) {
    console.error(e)
    yield put(createWorkActions.createTaskFailure())
    errorMessage('Something went wrong!')
  }
}