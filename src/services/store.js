import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import rootSaga from '../sagas/root-saga'
import rootReducer from '../reducers/root-reducer'

const persistConfig = {
  key: "root",
  whitelist: ['auth'],
  storage
}

const sagaMiddleware = createSagaMiddleware()

const configDevStore = () => createStore(
  persistReducer(persistConfig, rootReducer),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware)),
);

const configProdStore = () => createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);

export const store = process.env.NODE_ENV === 'production' ? configProdStore() : configDevStore();
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
