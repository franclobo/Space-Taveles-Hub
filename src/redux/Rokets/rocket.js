import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Types
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const ADDING_BOOK = 'ADDING_BOOK';
const REMOVING_BOOK = 'REMOVING_BOOK';

// Initial state
const initialState = [];

// Actions

export const loadBooks = () => async (dispatch) => {
  try {
    const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lbT5j970vaLoTzIT3rPx/books');
    if (res.status === 200) {
      const bookLoad = Object.keys(res.data).map((key) => ({
        item_id: key,
        ...res.data[key][0],
      }));
      dispatch({
        type: RESERVE_ROCKET,
        payload: bookLoad,
      });
    } throw new Error('Error loading books');
  } catch (error) {
    return 'Error loadding books';
  }
};
export const addBooks = (newBook) => async (dispatch) => {
  try {
    const res = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lbT5j970vaLoTzIT3rPx/books', newBook);
    if (res.status === 201) {
      return dispatch({
        type: ADDING_BOOK,
        payload: { ...newBook, id: uuidv4() },
      });
    }
    throw new Error('Error adding book');
  } catch (error) {
    const msgError = () => { 'Error adding books'; };
    return msgError();
  }
};
export const removeBook = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lbT5j970vaLoTzIT3rPx/books/${id}`);
    if (res.status === 201) {
      return dispatch({
        type: REMOVING_BOOK,
        payload: { id },
      });
    }
    throw new Error('Error removing book');
  } catch (error) {
    return 'Error removing books';
  }
};

// Reducers
export default function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case RESERVE_ROCKET:
      return [...action.payload];
    case ADDING_BOOK:
      return [...state.push(action.payload)];
    case REMOVING_BOOK:
      return [
        ...state.filter((book) => book.item_id !== action.payload.id),
      ];
    default:
      return state;
  }
}
