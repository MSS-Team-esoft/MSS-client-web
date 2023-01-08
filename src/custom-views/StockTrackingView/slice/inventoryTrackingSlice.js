import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  inventory: [],
  good: [],
  warning: [],
  critical: []
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
      state.good = action.payload.good
      state.warning = action.payload.warning
      state.critical = action.payload.critical
    },
    getDashboardDetailsFailure(state) {
      state.loading = true
    }
  }
})

export const inventoryTrackingActions = inventoryTrackingSlice.actions

export const selectIncomeInventory = (state) => state.inventoryTrackingReducer.inventory
export const selectDashboardGoodInventory = (state) => state.inventoryTrackingReducer.good
export const selectDashboardWarningInventory = (state) => state.inventoryTrackingReducer.warning
export const selectDashboardCriticalInventory = (state) => state.inventoryTrackingReducer.critical
export const selectIncomeLoading = (state) => state.inventoryTrackingReducer.income

const inventoryTrackingReducer = inventoryTrackingSlice.reducer
export default inventoryTrackingReducer