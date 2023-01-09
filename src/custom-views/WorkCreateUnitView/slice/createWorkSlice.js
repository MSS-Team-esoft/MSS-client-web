import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  workers: [],
  tasks: [],
  userId: null
}

export const createWorkSlice = createSlice({
  name: 'createWork',
  initialState,
  reducers:{
    getData(state) {
      state.loading = true
    },
    saveData(state, action) {
      state.loading = false
      state.workers = action.payload
    },
    getDataFailure(state) {
      state.loading = false
    },
    // eslint-disable-next-line no-unused-vars
    createTask(state, action) {
      state.loading = true
    },
    createTaskSuccess(state) {
      state.loading = false
    },
    createTaskFailure(state) {
      state.loading = false
    },
    getTaskData(state) {
      state.loading = true
    },
    saveTaskData(state, action) {
      state.loading = false
      state.tasks = action.payload
    },
    getTaskDataFailure(state) {
      state.loading = false
    },
    // eslint-disable-next-line no-unused-vars
    changeTaskStatus(state, action) {
      state.loading = true
    },
    changeTaskStatusSuccess(state) {
      state.loading = false
    },
    changeTaskStatusFailure(state) {
      state.loading = false
    },
    setUserId(state, action) {
      state.userId = action.payload
    }
  }
})

export const createWorkActions = createWorkSlice.actions

export const selectCreateWorkLoadingLoading = (state) => state.createWorkReducer.loading
export const selectItems = (state) => state.createWorkReducer.items
export const selectWorkers = (state) => state.createWorkReducer.workers
export const selectTasks = (state) => state.createWorkReducer.tasks
export const selectUserId = (state) => state.createWorkReducer.userId

const createWorkReducer = createWorkSlice.reducer
export default createWorkReducer