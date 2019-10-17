import { createActions } from 'redux-actions'

import ActionTypes from '../contants/action-types'

export const {
  clearStateAuth,
  loginAction,
  updateStateAuth
} = createActions({
  [ActionTypes.CLEAR_STATE_AUTH]: payload => payload,
  [ActionTypes.LOGIN_ACTION]: payload => payload,
  [ActionTypes.UPDATE_STATE_AUTH]: payload => payload
})
