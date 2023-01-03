import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  department: []
}

export const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers:{
    // eslint-disable-next-line no-unused-vars
    addDepartment(state, action) {
      state.loading = true
    },
    addDepartmentSuccess(state) {
      state.loading = false
    },
    addDepartmentFailure(state) {
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
    editDepartment(state) {
      state.loading = true
    },
    editDepartmentSuccess(state) {
      state.loading = false
    },
    editDepartmentFailure(state) {
      state.loading = false
    },
    deleteDepartment(state) {
      state.loading = true
    },
    deleteDepartmentSuccess(state) {
      state.loading = false
    },
    deleteDepartmentFailure(state) {
      state.loading = false
    }
  }
})

export const departmentActions = departmentSlice.actions

export const selectDepartmentLoading = (state) => state.departmentReducer.loading
export const selectDepartments = (state) => state.departmentReducer.department

const departmentReducer = departmentSlice.reducer
export default departmentReducer