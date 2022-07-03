import rocketReducer, { reserveRocket, unreserveRocket } from "./rocket";

describe ("rocketReducer test", () => {
  test ("initial state", () => {
    expect(rocketReducer(undefined, {})).toEqual([]);
  }
  );
  test ("reserveRocket", () => {
    expect(rocketReducer([{
      id: "R1",
      name: "Rocket 1",
      description: "Description 1",
      joined: false,
    }], {
      type: "RESERVE_ROCKET",
      payload: "R1",
    })).toEqual([{
      id: "R1",
      name: "Rocket 1",
      description: "Description 1",
      joined: false,
      reserved: true,
    }]);
  }
  );
  test ("unreserveRocket", () => {
    expect(rocketReducer([{
      id: "R1",
      name: "Rocket 1",
      description: "Description 1",
      joined: false,
      reserved: true,
    }], {
      type: "UNRESERVE_ROCKET",
      payload: "R1",
    })).toEqual([{
      id: "R1",
      name: "Rocket 1",
      description: "Description 1",
      joined: false,
      reserved: false,
    }]);
  }
  );
});