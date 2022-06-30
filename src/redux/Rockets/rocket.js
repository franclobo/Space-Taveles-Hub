import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Types
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

// Initial state
const initialState = [];

// Actions

export const loadBooks = () => async (dispatch) => {
  try {
    const res = await axios.get('#');
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
        type: CANCEL_ROCKET,
        payload: { ...newBook, id: uuidv4() },
      });
    }
    throw new Error('Error adding book');
  } catch (error) {
    const msgError = () => { 'Error adding books'; };
    return msgError();
  }
};

// Reducers
export default function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case RESERVE_ROCKET:
      return [...action.payload];
    case CANCEL_ROCKET:
      return [...state.push(action.payload)];
    default:
      return state;
  }
}
