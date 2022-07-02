import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions } from '../redux/Missions/missions';

// Fetch Missions.
function Missions() {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <table className="mission-container">
      <thead>
        <tr>
          <td><h1>Mision</h1></td>
          <td><h1>Description</h1></td>
          <td><h1>Status</h1></td>
          <td />
        </tr>
      </thead>
      <tbody>
        {
          mission.map((item) => (
            <tr key={item.id}>
              <td><h1>{item.name}</h1></td>
              <td><p>{item.description}</p></td>
              <td><button type="button">NOT A MEMBER</button></td>
              <td><button type="button">Join Mission</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Missions;
