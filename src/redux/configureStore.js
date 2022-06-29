import {
  legacy_createStore as createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}

export default generateStore;
