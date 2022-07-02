import axios from 'axios';

// Types
const LOAD_MISSIONS = 'LOAD_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
// Cancel Mission
const LEAVE_MISSION = 'LEAVE_MISSION';

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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

// Reducers
export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...state, action.payload];
    case JOIN_MISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: true } : item
      ));
    case LEAVE_MISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: false } : item
      ));
    default:
      return state;
  }
}
