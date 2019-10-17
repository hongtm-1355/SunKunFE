import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { Switch, Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import history from "services/history"
import { store, persistor } from "services/store"

import PrivateRoute from "components/Routes/PrivateRoute"
import PublicRoute from "components/Routes/PublicRoute"
import SwichRoute from "components/Routes/SwichRoute"

import MainLayout from "components/layouts/main-layout"
import Login from "./main-app/login"
import dashboard from "screens/main-app/dashboard"

import "screens/App.css";

function App() {
  return (
    <Suspense fallback={false}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <PrivateRoute exect path="/templates" layout={MainLayout} component={dashboard} />
              <PublicRoute exect path="/login" component={Login} />
              <SwichRoute exect path="/" />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default App;
