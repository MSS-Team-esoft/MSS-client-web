import {call, put} from "redux-saga/effects"
import {Auth} from "aws-amplify"
import {authenticationActions} from "../slice/authenticationSlice"

const signOutUserAsync = async (history) => {

  return await Auth.signOut().then(() => {
    localStorage.remove("user")
    history.push("/login")
  }).catch(err => {
    console.error(err.message)
  })
}

export default function* callSignOutSaga(action) {
  const {history} = action

  try {
    yield call(signOutUserAsync, history)
    yield put(authenticationActions.signOutSuccess())
  } catch (err) {
    console.error(err.message)
    yield put(authenticationActions.signOutFailure('error'))
  }
}