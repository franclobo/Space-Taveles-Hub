import RocketsReducer from './Rockets';

describe('Dragons Reducer Test', () => {
  test('Reserved dragon', () => {
    expect(RocketsReducer([{
      id: 'R1',
      name: 'Rocket 1',
      description: 'Description',
      img: 'img1',
      reserved: true,
    }], {
      type: 'RESERVEROCKET',
      rocketReserved: 'R1',
    })).toEqual([{
      id: 'R1',
      name: 'Rocket 1',
      description: 'Description',
      img: 'img1',
      reserved: true,
    }]);
  });
  test('Unreserved dragon', () => {
    expect(RocketsReducer([{
      id: 'R1',
      name: 'Rocket 1',
      description: 'Description',
      img: 'img1',
      reserved: false,
    }], {
      type: 'CANCELRESERVE',
      rocketCanceled: 'R1',
    })).toEqual([{
      id: 'R1',
      name: 'Rocket 1',
      description: 'Description',
      img: 'img1',
      reserved: false,
    }]);
  });
});
