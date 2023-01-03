import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  items: [],
  workers: []
}

export const createWorkSlice = createSlice({
  name: 'createWork',
  initialState,
  reducers:{
    getItems(state) {
      state.loading = true
    },
    saveItems(state, action) {
      state.loading = false
      state.items = action.payload.items
      state.workers = action.payload.workers
    },
    getItemsFailure(state) {
      state.loading = false
    },
    // eslint-disable-next-line no-unused-vars
    deleteItem(state, id) {
      state.loading = true
    },
    deleteItemSuccess(state) {
      state.loading = false
    },
    deleteItemFailure(state) {
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
    }
  }
})

export const createWorkActions = createWorkSlice.actions

export const selectCreateWorkLoadingLoading = (state) => state.createWorkReducer.loading
export const selectItems = (state) => state.createWorkReducer.items
export const selectWorkers = (state) => state.createWorkReducer.workers

const createWorkReducer = createWorkSlice.reducer
export default createWorkReducer