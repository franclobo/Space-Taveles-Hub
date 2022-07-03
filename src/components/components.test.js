import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Header from './Header';
import Missions from './Missions';
import Rockets from './Rockets';

test('Header renders correctly', () => {
  const store = configureStore();
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Missions renders correctly', () => {
  const store = configureStore();
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Missions />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rockets renders correctly', () => {
  const store = configureStore();
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Rockets />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
