const url = 'https://api.spacexdata.com/v3/dragons';
const GETDRAGON = 'Space-Travelers-Hub22/dragons/GETDRAGON';
const RESERVE_DRAGON = 'Space-Travelers-Hub22/dragons/RESERVE_DRAGON';
const UNRESERVE_DRAGON = 'Space-Travelers-Hub22/dragons/UNRESERVE_DRAGON';

function dragonsReducer(state = [], action) {
  switch (action.type) {
    case GETDRAGON:
      return [...action.dragons];
    case RESERVE_DRAGON:
      return state.map((item) => (
        item.id === action.payload ? { ...item, reserved: true } : item
      ));
    case UNRESERVE_DRAGON:
      return state.map((item) => (
        item.id === action.payload ? { ...item, reserved: false } : item
      ));
    default:
      return state;
  }
}

const GetDragon = (dragons) => ({
  type: GETDRAGON,
  dragons,
});

export const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  payload: id,
});

export const unreserveDragon = (id) => ({
  type: UNRESERVE_DRAGON,
  payload: id,
});

export const Fetchdragon = () => (dispatch) => {
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
          name: element[1].name,
          type: element[1].type,
          img: element[1].flickr_images[0],
        });
      });
      dispatch(GetDragon(List));
    });
};

export default dragonsReducer;
