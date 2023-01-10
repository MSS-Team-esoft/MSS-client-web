// eslint-disable-next-line no-unused-vars
import {call, put} from "redux-saga/effects"
import {Auth} from "aws-amplify"
import {fireAlertCustom} from "../../../../utility/customUtils"
import {authenticationActions} from "../slice/authenticationSlice"
import axios from "../../../../axios/axios"
import jwt_decode from "jwt-decode"
// eslint-disable-next-line no-unused-vars
const loginAsync = async (username, password, history) => {

  return await axios.post('/auth/login', {
    email: username,
    password
  }).then(res => {
    const token = jwt_decode(res?.data?.stsTokenManager?.accessToken)

    console.log(token)
    window.localStorage.setItem("user", "logged")

    history.push('/dashboard')
  }).catch((err) => {
    fireAlertCustom("hmmm...", err.message, "error")
    return false
  })
}

// eslint-disable-next-line no-unused-vars
export default function* callSignUpSaga({payload}) {
  try {
    const {email, password, history} = payload
    yield call(loginAsync, email, password, history)
    window.localStorage.setItem("user", "logged")
    yield put(authenticationActions.signInSuccess())
  } catch (e) {
    console.error(e)
    yield put(authenticationActions.signInFailure('error'))
  }
}
