// eslint-disable-next-line no-unused-vars
import {call, put} from "redux-saga/effects"
import {Auth} from "aws-amplify"
import {fireAlertCustom} from "../../../../utility/customUtils"
import {authenticationActions} from "../slice/authenticationSlice"
// eslint-disable-next-line no-unused-vars
const loginAsync = async (username, password) => {

  return await Auth.signIn(username, password).then(() => {
    window.localStorage.setItem("user", "logged")
  }).catch((err) => {
    fireAlertCustom("hmmm...", err.message, "error")
    return false
  })
}

export default function* callSignUpSaga(action) {
  // eslint-disable-next-line no-unused-vars
  const {data, history} = action

  console.log(action)

  try {
    // yield call(loginAsync, data.email, data.password)
    window.localStorage.setItem("user", "logged")
    history.push("/dashboard")
    yield put(authenticationActions.signInSuccess())
  } catch (e) {
    console.error(e)
    yield put(authenticationActions.signInFailure('error'))
  }
}
