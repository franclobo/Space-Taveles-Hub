import MissionsReducer from './Missions';

describe('Missions Reducer Test', () => {
  test('Join Mission', () => {
    expect(MissionsReducer([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description',
      joined: true,
    }], {
      type: 'JOINMISSION',
      payload: 'M1',
    })).toEqual([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description',
      joined: true,
    }]);
  });
  test('Leave Mission', () => {
    expect(MissionsReducer([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description',
      joined: false,
    }], {
      type: 'LEAVEMISSION',
      payload: 'M1',
    })).toEqual([{
      id: 'M1',
      name: 'Mission 1',
      description: 'Description',
      joined: false,
    }]);
  });
});
