import {takeLatest} from "redux-saga/effects"
import {authenticationActions} from "../slice/authenticationSlice"
import callSignUpSaga from "./callSignUpSaga"
import callSignOutSaga from "./callSignOutSaga"

export default function* authenticationSagas() {
  yield takeLatest(authenticationActions.signIn, callSignUpSaga)
  yield takeLatest(authenticationActions.signOut, callSignOutSaga)
}