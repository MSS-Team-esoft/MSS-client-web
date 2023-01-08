import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  employee: [],
  currentlyEditing: false,
  editingData: null
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers:{
    // eslint-disable-next-line no-unused-vars
    addEmployee(state, action) {
      state.loading = true
    },
    addEmployeeSuccess(state) {
      state.loading = false
    },
    addEmployeeFailure(state) {
      state.loading = false
    },
    getEmployees(state) {
      state.loading = true
    },
    saveEmployees(state, action) {
      state.loading = false
      state.employee = action.payload
    },
    getEmployeeFailure(state) {
      state.loading = false
    },
    setCurrentlyEditing(state, action) {
      state.currentlyEditing = true
      state.editingData = action.payload
    },
    editEmployee(state) {
      state.loading = true
    },
    editEmployeeSuccess(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
    },
    editEmployeeFailure(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
    },
    deleteEmployeeFailure(state) {
      state.loading = false
    },
    deleteEmployee(state) {
      state.loading = true
    },
    deleteEmployeeSuccess(state) {
      state.loading = false
    }
  }
})

export const employeeActions = employeeSlice.actions

export const selectEmployeeLoading = (state) => state.employeeReducer.loading
export const selectEmployeeCurrentlyEditing = (state) => state.employeeReducer.currentlyEditing
export const selectEmployeeCurrentlyEditingData = (state) => state.employeeReducer.editingData
export const selectEmployees = (state) => state.employeeReducer.employee

const employeeReducer = employeeSlice.reducer
export default employeeReducer