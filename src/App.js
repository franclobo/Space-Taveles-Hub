import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

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
