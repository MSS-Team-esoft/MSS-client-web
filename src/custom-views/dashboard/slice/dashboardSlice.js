import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  good: [],
  warning: [],
  critical: [],
  income: null,
  stockReport: null,
  incomeMovement: null
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers:{
    getDashboardDetails(state) {
      state.loading = true
    },
    saveDashboardDetails(state, action) {
      state.loading = false
      state.good = action.payload.good
      state.warning = action.payload.warning
      state.critical = action.payload.critical
    },
    getDashboardDetailsFailure(state) {
      state.loading = true
    },
    getStockReport(state) {
      state.loading = true
    },
    saveStockReport(state, action) {
      state.loading = true
      state.stockReport = action.payload
    },
    getStockReportFailure(state) {
      state.loading = true
    },
    getIncomeReport(state) {
      state.loading = true
    },
    saveIncomeReport(state, action) {
      state.loading = true
      state.incomeMovement = action.payload
    },
    getIncomeReportFailure(state) {
      state.loading = true
    }
  }
})

export const dashboardActions = dashboardSlice.actions

export const selectDashboardGoodInventory = (state) => state.dashboardReducer.good
export const selectDashboardWarningInventory = (state) => state.dashboardReducer.warning
export const selectDashboardCriticalInventory = (state) => state.dashboardReducer.critical
export const selectDashboardIncome = (state) => state.dashboardReducer.income
export const selectDashboardStockReport = (state) => state.dashboardReducer.stockReport
export const selectDashboardIncomeReport = (state) => state.dashboardReducer.incomeMovement

const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer