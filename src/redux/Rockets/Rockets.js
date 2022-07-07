const url = 'https://api.spacexdata.com/v3/rockets';
const GETROCKET = 'Space-Travelers-Hub22/Rockets/GETROCKET';
const RESERVEROCKET = 'Space-Travelers-Hub22/Rockets/RESERVEROCKET';
const CANCELRESERVE = 'Space-Travelers-Hub22/Rockets/CANCELRESERVE';

function RocketsReducer(state = [], action) {
  switch (action.type) {
    case GETROCKET:
      return [...action.rockets];
    case RESERVEROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketReserved) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCELRESERVE:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketCanceled) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
}

const GetRocket = (rockets) => ({
  type: GETROCKET,
  rockets,
});

export const ReserveRocket = (id) => ({
  type: RESERVEROCKET,
  rocketReserved: id,
});

export const CancelReserve = (id) => ({
  type: CANCELRESERVE,
  rocketCanceled: id,
});

export const FetchRocket = () => (dispatch) => {
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
          id: element[1].id,
          name: element[1].rocket_name,
          description: element[1].description,
          img: element[1].flickr_images[0],
        });
      });
      dispatch(GetRocket(List));
    });
};

export default RocketsReducer;
