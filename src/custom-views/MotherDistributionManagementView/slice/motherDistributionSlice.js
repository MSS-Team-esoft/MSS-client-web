import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  department: [],
  items: []
}

export const distributionSlice = createSlice({
  name: 'distribution',
  initialState,
  reducers:{
    getItems(state) {
      state.loading = true
    },
    saveItems(state, action) {
      state.loading = false
      state.items = action.payload
    },
    getItemsFailure(state) {
      state.loading = false
    },
    getDepartments(state) {
      state.loading = true
    },
    saveDepartments(state, action) {
      state.loading = false
      state.department = action.payload
    },
    getDepartmentsFailure(state) {
      state.loading = false
    },
    // eslint-disable-next-line no-unused-vars
    updateDepartmentStock(state, action) {
      state.loading = true
    },
    updateDepartmentStockSuccess(state) {
      state.loading = false
    },
    updateDepartmentsFailure(state) {
      state.loading = false
    }
  }
})

export const distributionActions = distributionSlice.actions

export const selectDistributionLoading = (state) => state.distributionReducer.loading
export const selectDistributions = (state) => state.distributionReducer.department
export const selectDistributionItems = (state) => state.distributionReducer.items

const distributionReducer = distributionSlice.reducer
export default distributionReducer