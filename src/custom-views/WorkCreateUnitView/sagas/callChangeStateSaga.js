import {call, put} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {createWorkActions} from "../slice/createWorkSlice"
import {errorMessage, successMessage} from "../../../utility/alerts"

const updateTasksAsync = async (id, status) => {
  return axios.patch(`/work-monitoring/task/${id}/${status}`).then(res => res.data)
}

export default function* callChangeStateSaga({payload}) {
  try {
    const {id, state} = payload
    yield call(updateTasksAsync, id, state)
    yield put(createWorkActions.changeTaskStatusSuccess())
    successMessage('Success!')
  } catch (e) {
    console.error(e)
    yield put(createWorkActions.getTaskDataFailure())
    errorMessage('Something went wrong!')
  }
}