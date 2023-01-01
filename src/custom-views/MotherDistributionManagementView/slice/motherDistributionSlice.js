import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  department: []
}

export const distributionSlice = createSlice({
  name: 'distribution',
  initialState,
  reducers:{
    getDepartments(state) {
      state.loading = true
    },
    saveDepartments(state, action) {
      state.loading = false
      state.department = action.payload
    },
    // eslint-disable-next-line no-unused-vars
    updateDepartmentStock(state, action) {
      state.loading = true
    },
    updateDepartmentStockSuccess(state) {
      state.loading = false
    }
  }
})

export const distributionActions = distributionSlice.actions

export const selectDistributionLoading = (state) => state.distributionReducer.loading
export const selectDistributions = (state) => state.distributionReducer.department

const distributionReducer = distributionSlice.reducer
export default distributionReducer