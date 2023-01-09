// eslint-disable-next-line no-unused-vars
import {call, put} from "redux-saga/effects"
import {Auth} from "aws-amplify"
import {fireAlertCustom} from "../../../../utility/customUtils"
import {authenticationActions} from "../slice/authenticationSlice"
import axios from "../../../../axios/axios"
// eslint-disable-next-line no-unused-vars
const loginAsync = async (username, password) => {

  return await axios.post('/auth/login', {
    email: username,
    password
  }).then(res => {
    console.log(res)
    window.localStorage.setItem("user", "logged")
  }).catch((err) => {
    fireAlertCustom("hmmm...", err.message, "error")
    return false
  })
}

// eslint-disable-next-line no-unused-vars
export default function* callSignUpSaga({payload}) {
  try {
    yield call(loginAsync, payload.email, payload.password)
    window.localStorage.setItem("user", "logged")
    yield put(authenticationActions.signInSuccess())
  } catch (e) {
    console.error(e)
    yield put(authenticationActions.signInFailure('error'))
  }
}
