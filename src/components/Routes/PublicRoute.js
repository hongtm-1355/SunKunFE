import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { authSelector } from '../../selectors/auth-selector'

const PublicRoute = ({component: Component, isAuth, ...rest }) => {
  if(isAuth) return <Redirect to='/' />

  return <Component />
}

export default connect(authSelector, null)(PublicRoute)
