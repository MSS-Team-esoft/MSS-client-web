import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  request: []
}

export const requestSlice = createSlice({
  name: 'request',
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
    // eslint-disable-next-line no-unused-vars
    changeState(state, action) {
      state.loading = true
    },
    changeStateSuccess(state) {
      state.loading = false
    },
    changeStateFailure(state) {
      state.loading = true
    }
  }
})

export const requestActions = requestSlice.actions

export const selectRequestLoading = (state) => state.requestReducer.loading
export const selectRequests = (state) => state.requestReducer.request

const requestReducer = requestSlice.reducer
export default requestReducer