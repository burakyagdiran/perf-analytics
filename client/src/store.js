import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dashboardReducer from './pages/Dashboard/reducer';
import rootReducer from './rootReducer';
import dashboardSaga from './pages/Dashboard/sagas';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  dashboardReducer,
  rootReducer,
});

const enhancers = [applyMiddleware(sagaMiddleware)];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(combinedReducers, composeEnhancers(...enhancers));

const sagas = [dashboardSaga, rootSagas];

sagas.forEach((saga) => {
  sagaMiddleware.run(saga);
});

export default store;
