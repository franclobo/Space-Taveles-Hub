import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile/MyProfile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import Dragons from './components/Dragons/Dragons';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
