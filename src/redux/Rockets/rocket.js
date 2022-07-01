import axios from 'axios';

// Types
const LOAD_ROCKETS = 'LOAD_ROCKETS';

// Initial state
const initialState = [];

// Actions

export const loadRockets = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/rockets');
    if (res.status === 200) {
      const rocketLoad = Object.keys(res.data).map((key) => ({
        ...res.data[key][0],
      }));
      dispatch({
        type: LOAD_ROCKETS,
        payload: rocketLoad,
      });
    } throw new Error('Error loading Rockets');
  } catch (error) {
    return 'Error loadding Rockets';
  }
};

// Reducers
export default function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
}
