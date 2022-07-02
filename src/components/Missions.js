import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions, joinMission, leaveMission } from '../redux/Missions/missions';

// Display Missions.
function Missions() {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(loadMissions());
  }, []);
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

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
              <td>
                { item.joined ? (
                  <button type="button" onClick={() => handleLeave(item.id)}>NOT A MEMBER</button>
                ) : (
                  <button type="button" onClick={() => handleJoin(item.id)}>Active Member</button>
                ) }
              </td>
              <td>
                { item.joined ? (
                  <button type="button" onClick={() => handleLeave(item.id)}>Leave Mission</button>
                ) : (
                  <button type="button" onClick={() => handleJoin(item.id)}>Join Mission</button>
                ) }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Missions;
