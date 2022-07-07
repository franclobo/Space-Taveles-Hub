import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import MissionsReducer from './Missions/Missions';
import dragonsReducer from './Dragons/dragons';
import RocketsReducer from './Rockets/Rockets';

const RootReducer = combineReducers({
  rockets: RocketsReducer,
  missions: MissionsReducer,
  dragons: dragonsReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;
