import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // ← Corrección aquí
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;