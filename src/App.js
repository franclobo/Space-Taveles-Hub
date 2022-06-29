import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './modules/Header';
import Missions from './modules/Missions';
import Rockets from './modules/Rockets';
import MyProfile from './modules/MyProfile';

function App() {
  return (
    <Provider>
      <Header className="header" />
      <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route
          path="/profile"
          element={<MyProfile />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
