import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  incomeYear: null,
  incomeMonth: null,
  incomeStats: null,
  logs: []
}

export const incomeReportSlice = createSlice({
  name: 'incomeReport',
  initialState,
  reducers:{
    getIncomeDetails(state) {
      state.loading = true
    },
    saveIncomeDetails(state, action) {
      state.loading = false
      state.incomeYear = action.payload.incomeYear
      state.incomeMonth = action.payload.incomeMonth
      state.incomeStats = action.payload.incomeStats
      state.logs = action.payload.logs
    },
    getIncomeDetailsFailure(state) {
      state.loading = true
    },
    getIncomeLogsDetails(state) {
      state.loading = true
    },
    saveIncomeLogsDetails(state, action) {
      state.loading = false
      state.logs = action.payload
    },
    getIncomeLogsDetailsFailure(state) {
      state.loading = true
    },
    uploadIncomeSheet(state) {
      state.loading = true
    },
    uploadIncomeSheetSuccess(state) {
      state.loading = true
    },
    uploadIncomeSheetFailure(state) {
      state.loading = true
    }
  }
})

export const incomeActions = incomeReportSlice.actions

export const selectIncomeLoading = (state) => state.incomeReportReducer.loading
export const selectIncome = (state) => state.incomeReportReducer.income
export const selectIncomeLogs = (state) => state.incomeReportReducer.logs

const incomeReportReducer = incomeReportSlice.reducer
export default incomeReportReducer