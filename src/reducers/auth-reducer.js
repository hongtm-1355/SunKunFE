import { handleActions } from 'redux-actions'

import { clearStateAuth, updateStateAuth } from '../actions/auth-action'

export const initialState = {
  isAuth: false
};

export default handleActions({
  [clearStateAuth]: () => ({...initialState}),
  [updateStateAuth]: (state, action) => {
    return {
      ...state, ...action.payload
    }
  }
}, initialState);
