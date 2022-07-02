import axios from 'axios';

// Types
const LOAD_MISSIONS = 'LOAD_MISSIONS';

// Initial state
const initialState = [];

// Actions

export const loadMissions = () => async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/missions');
  for (let i = 0; i < res.data.length; i += 1) {
    const mission = res.data[i];
    dispatch({
      type: LOAD_MISSIONS,
      payload: {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      },
    });
  }
};

// Reducers
export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
}
