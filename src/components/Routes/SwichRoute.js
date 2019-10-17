import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

import { authSelector } from '../../selectors/auth-selector'

import NotFound from "../../screens/commons/404-not-found"

const SwichRoute = ({component: Component, isAuth, ...rest }) => {
  if(rest.location.pathname === "/") {
    return <Redirect to='/templates' />
  }

  return <Route component={NotFound} />
}

export default connect(authSelector, null)(SwichRoute)
