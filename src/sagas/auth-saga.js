import { takeLatest, all, put, call } from 'redux-saga/effects';

import history from '../services/history'
import { AuthApi } from '../services/api/auth-api'
import { formikSaga } from '../ultiz/form-ultiz'

import { loginAction, updateStateAuth } from '../actions/auth-action'

function* loginSaga(action) {
  yield formikSaga(action, function*(values) {
    const response = yield call([AuthApi, AuthApi.signin], values)
    yield put(updateStateAuth({ user: response.data, isAuth: true }))
    yield localStorage.setItem('user_token', JSON.stringify(response.data.userToken))
    yield localStorage.setItem('user', JSON.stringify(response.data.currentUser))

    yield history.push('/templates')
  })
}

export default function*() {
  yield all([
    takeLatest(loginAction, loginSaga)
  ])
}
