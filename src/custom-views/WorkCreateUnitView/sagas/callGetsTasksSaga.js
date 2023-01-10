import {call, put, select} from "redux-saga/effects"
import axios from "../../../axios/axios"
import {createWorkActions, selectUserId} from "../slice/createWorkSlice"

const getTodoTasksAsync = async (id) => {
  return axios.get(`/work-monitoring/fetch/${id}`).then(res => res.data)
}

export default function* callGetsTasksSaga() {
  const userId = yield select(selectUserId)
  try {
    const tasks = yield call(getTodoTasksAsync, userId)
    yield put(createWorkActions.saveTaskData(tasks))
  } catch (e) {
    console.error(e)
    yield put(createWorkActions.getTaskDataFailure())
  }
}