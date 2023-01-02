import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  inventory: null
}

export const inventoryTrackingSlice = createSlice({
  name: 'incomeTracking',
  initialState,
  reducers:{
    getDashboardDetails(state) {
      state.loading = true
    },
    saveDashboardDetails(state, action) {
      state.loading = false
      state.inventory = action.payload.inventory
    },
    getDashboardDetailsFailure(state) {
      state.loading = true
    }
  }
})

export const inventoryTrackingActions = inventoryTrackingSlice.actions

export const selectIncomeInventory = (state) => state.inventoryTrackingReducer.inventory
export const selectIncomeLoading = (state) => state.inventoryTrackingReducer.income

const inventoryTrackingReducer = inventoryTrackingSlice.reducer
export default inventoryTrackingReducer