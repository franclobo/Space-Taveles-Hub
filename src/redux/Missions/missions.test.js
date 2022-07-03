import missionsReducer from './missions';

describe('missionsReducer test', () => {
  test('initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });
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
  });
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
  });
});
