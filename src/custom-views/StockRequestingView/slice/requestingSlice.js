import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  request: [],
  items: []
}

export const requestingSlice = createSlice({
  name: 'requesting',
  initialState,
  reducers:{
    getRequests(state) {
      state.loading = true
    },
    saveRequests(state, action) {
      state.loading = false
      state.request = action.payload
    },
    getRequestsFailure(state) {
      state.loading = true
    },
    getItems(state) {
      state.loading = true
    },
    saveItems(state, action) {
      state.loading = false
      state.items = action.payload
    },
    getItemsFailure(state) {
      state.loading = true
    },
    // eslint-disable-next-line no-unused-vars
    makeRequest(state, action) {
      state.loading = true
    },
    makeRequestSuccess(state) {
      state.loading = false
    },
    makeRequestFailure(state) {
      state.loading = false
    },
    // eslint-disable-next-line no-unused-vars
    editRequest(state, action) {
      state.loading = true
    },
    editRequestSuccess(state) {
      state.loading = false
    },
    editRequestFailure(state) {
      state.loading = false
    },
    editRequestsFailure(state) {
      state.loading = true
    },
    deleteRequestsFailure(state) {
      state.loading = true
    },
    // eslint-disable-next-line no-unused-vars
    deleteRequest(state, action) {
      state.loading = true
    },
    deleteRequestSuccess(state) {
      state.loading = false
    },
    deleteRequestFailure(state) {
      state.loading = false
    }
  }
})

export const requestingActions = requestingSlice.actions

export const selectRequestingLoading = (state) => state.requestingReducer.loading
export const selectRequesting = (state) => state.requestingReducer.request
export const selectRequestingItems = (state) => state.requestingReducer.items

const requestingReducer = requestingSlice.reducer
export default requestingReducer