import {
  legacy_createStore as createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rocketsReducer from './Rockets/rocket';
import missionsReducer from './Missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
  return store;
}

export default generateStore;
