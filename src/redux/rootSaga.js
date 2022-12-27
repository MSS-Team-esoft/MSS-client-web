import {spawn} from "redux-saga/effects"
import authenticationSagas from "../views/pages/authentication/sagas/authenticationSagas"

export default function* rootSaga() {
    yield spawn(authenticationSagas)
}