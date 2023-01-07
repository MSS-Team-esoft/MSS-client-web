import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  workshop: [],
  currentlyEditing: false,
  editingData: null
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
    setCurrentlyEditing(state, action) {
      state.currentlyEditing = true
      state.editingData = action.payload
    },
    editWorkshop(state) {
      state.loading = true
    },
    editWorkshopSuccess(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
    },
    editWorkshopFailure(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
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
export const selectWorkshopCurrentlyEditing = (state) => state.workshopReducer.currentlyEditing
export const selectWorkshopCurrentlyEditingData = (state) => state.workshopReducer.editingData
export const selectWorkshops = (state) => state.workshopReducer.workshop

const workshopReducer = workshopSlice.reducer
export default workshopReducer