import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  inventory: null,
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
      state.inventory = action.payload.inventory
      state.income = action.payload.income
    },
    getStockReport(state) {
      state.loading = true
    },
    saveStockReport(state, action) {
      state.loading = true
      state.stockReport = action.payload
    },
    getIncomeReport(state) {
      state.loading = true
    },
    saveIncomeReport(state, action) {
      state.loading = true
      state.incomeMovement = action.payload
    }
  }
})

export const dashboardActions = dashboardSlice.actions

export const selectDashboardInventory = (state) => state.dashboardReducer.inventory
export const selectDashboardIncome = (state) => state.dashboardReducer.income
export const selectDashboardStockReport = (state) => state.dashboardReducer.stockReport
export const selectDashboardIncomeReport = (state) => state.dashboardReducer.incomeMovement

const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer