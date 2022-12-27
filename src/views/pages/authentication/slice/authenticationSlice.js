import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  signInLoading: false,
  signInSuccess: false,
  signInError: {hasError: false, description: ''},
  signOutLoading: false,
  signOutSuccess: false,
  signOutError: {hasError: false, description: ''}
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    signIn(state, action) {
      state.signInLoading = true
      state.signInError = {hasError: false, description: ''}
    },
    // eslint-disable-next-line no-unused-vars
    signInSuccess(state, action) {
      state.signInLoading = false
      state.signInSuccess = true
    },
    signInFailure(state, action) {
      state.signInLoading = false
      state.signInError = {hasError: false, description: action.payload}
    },
    // eslint-disable-next-line no-unused-vars
    signOut(state, action) {
      state.signOutLoading = true
      state.signOutError = {hasError: false, description: ''}
    },
    // eslint-disable-next-line no-unused-vars
    signOutSuccess(state, action) {
      state.signOutLoading = false
      state.signOutSuccess = true
    },
    signOutFailure(state, action) {
      state.signOutLoading = false
      state.signOutError = {hasError: false, description: action.payload}
    }
  }
})

// Actions
export const authenticationActions = authenticationSlice.actions

// Selectors
export const selectSignInLoading = (state) => state.authenticationReducer.signInLoading
export const selectSignInSuccess = (state) => state.authenticationReducer.signInSuccess
export const selectSignInError = (state) => state.authenticationReducer.signInError
export const selectSignOutLoading = (state) => state.authenticationReducer.signOutLoading
export const selectSignOutSuccess = (state) => state.authenticationReducer.signOutSuccess
export const selectSignOutError = (state) => state.authenticationReducer.signOutError

// Reducer
const authenticationReducer = authenticationSlice.reducer
export default authenticationReducer