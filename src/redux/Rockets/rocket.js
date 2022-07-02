import axios from 'axios';

// Types
const LOAD_ROCKETS = 'LOAD_ROCKETS';

// Initial state
const initialState = [];

// Actions

export const loadRockets = () => async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  for (let i = 0; i < res.data.length; i += 1) {
    const rocket = res.data[i];
    dispatch({
      type: LOAD_ROCKETS,
      payload: {
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        image: rocket.flickr_images,
        description: rocket.description,
      },
    });
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
