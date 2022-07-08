import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import NavBar from './navbar';
import Rockets from './Rockets/Rockets';
import Missions from './Missions/Missions';
import Dragons from './Dragons/Dragons';

describe('Components Test', () => {
  test('NavBar Render', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Rockets Render', () => {
    const store = configureStore;
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
  test('Missions Render', () => {
    const store = configureStore;
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
  test('Dragons Render', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Dragons />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
