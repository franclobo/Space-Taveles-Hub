import missionsReducer from './missions';

describe('missionsReducer test', () => {
  test('initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });
  test('loadMissions', () => {
    expect(missionsReducer([], {
      type: 'LOAD_MISSIONS',
      payload: {
        id: 'M1',
        name: 'Mission 1',
        description: 'Description 1',
      },
    })).toEqual([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description 1',
    }]);
  }).timeout(10000);
  test('joinMission', () => {
    expect(missionsReducer([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description 1',
      joined: false,
    }], {
      type: 'JOIN_MISSION',
      payload: 'M1',
    })).toEqual([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description 1',
      joined: true,
    }]);
  }).timeout(10000);
  test('leaveMission', () => {
    expect(missionsReducer([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description 1',
      joined: true,
    }], {
      type: 'LEAVE_MISSION',
      payload: 'M1',
    })).toEqual([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description 1',
      joined: false,
    }]);
  }).timeout(10000);
});
