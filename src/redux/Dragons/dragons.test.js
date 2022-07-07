import dragonsReducer from './dragons';

describe('Dragons Reducer Test', () => {
  test('Reserved dragon', () => {
    expect(dragonsReducer([{
      id: 'D1',
      name: 'Dragon 1',
      reserved: true,
    }], {
      type: 'RESERVE_DRAGON',
      payload: 'D1',
    })).toEqual([{
      id: 'D1',
      name: 'Dragon 1',
      reserved: true,
    }]);
  });
  test('Unreserved dragon', () => {
    expect(dragonsReducer([{
      id: 'D1',
      name: 'Dragon 1',
      reserved: false,
    }], {
      type: 'UNRESERVE_DRAGON',
      payload: 'D1',
    })).toEqual([{
      id: 'D1',
      name: 'Dragon 1',
      reserved: false,
    }]);
  });
});
