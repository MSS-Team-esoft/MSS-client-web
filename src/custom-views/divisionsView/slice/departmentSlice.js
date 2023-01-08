import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  department: [],
  currentlyEditing: false,
  editingData: null
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
    setCurrentlyEditing(state, action) {
      state.currentlyEditing = true
      state.editingData = action.payload
    },
    editDepartment(state) {
      state.loading = true
    },
    editDepartmentSuccess(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
    },
    editDepartmentFailure(state) {
      state.loading = false
      state.currentlyEditing = false
      state.editingData = null
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
export const selectDepartmentCurrentlyEditing = (state) => state.departmentReducer.currentlyEditing
export const selectDepartmentCurrentlyEditingData = (state) => state.departmentReducer.editingData

const departmentReducer = departmentSlice.reducer
export default departmentReducer