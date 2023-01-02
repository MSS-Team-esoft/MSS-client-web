import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  workshop: []
}

export const workshopSlice = createSlice({
  name: 'workshop',
  initialState,
  reducers:{
    // eslint-disable-next-line no-unused-vars
    addWorkshop(state, action) {
      state.loading = true
    },
    addWorkshopSuccess(state) {
      state.loading = false
    },
    addWorkshopFailure(state) {
      state.loading = false
    },
    getWorkshops(state) {
      state.loading = true
    },
    saveWorkshops(state, action) {
      state.loading = false
      state.workshop = action.payload
    },
    getWorkshopFailure(state) {
      state.loading = false
    },
    editWorkshop(state) {
      state.loading = true
    },
    editWorkshopSuccess(state) {
      state.loading = false
    },
    editWorkshopFailure(state) {
      state.loading = false
    },
    deleteWorkshopFailure(state) {
      state.loading = false
    },
    deleteWorkshop(state) {
      state.loading = true
    },
    deleteWorkshopSuccess(state) {
      state.loading = false
    }
  }
})

export const workshopActions = workshopSlice.actions

export const selectWorkshopLoading = (state) => state.workshopReducer.loading
export const selectWorkshops = (state) => state.workshopReducer.workshop

const workshopReducer = workshopSlice.reducer
export default workshopReducer