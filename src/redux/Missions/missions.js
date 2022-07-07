const url = 'https://api.spacexdata.com/v3/missions';
const GETMISSION = 'Space-Travelers-Hub22/Missions/GETMISSION';
const JOINMISSION = 'Space-Travelers-Hub22/Missions/JOINMISSION';
const LEAVEMISSION = 'Space-Travelers-Hub22/Missions/LEAVEMISSION';
function MissionsReducer(state = [], action) {
  switch (action.type) {
    case GETMISSION:
      return [...action.missions];
    case JOINMISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: true } : item
      ));
    case LEAVEMISSION:
      return state.map((item) => (
        item.id === action.payload ? { ...item, joined: false } : item
      ));
    default:
      return state;
  }
}

const GetMission = (missions) => ({
  type: GETMISSION,
  missions,
});

export const joinMission = (id) => ({
  type: JOINMISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVEMISSION,
  payload: id,
});

export const FetchMission = () => (dispatch) => {
  const List = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const Data = Object.entries(result);
      Data.forEach((element) => {
        List.push({
          id: element[1].mission_id,
          name: element[1].mission_name,
          description: element[1].description,
        });
      });
      dispatch(GetMission(List));
    });
};

export default MissionsReducer;
