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
        <tr className="tableHead">
          <td className="missionTitle"><h1>Mision</h1></td>
          <td className="mission-description"><h1>Description</h1></td>
          <td className="missionStatus"><h1 className="status">Status</h1></td>
          <td />
        </tr>
      </thead>
      <tbody>
        {
          mission.map((item) => (
            <tr className="tableBody" key={item.id}>
              <td className="missionTitle"><h1>{item.name}</h1></td>
              <td className="mission-description"><p>{item.description}</p></td>
              <td className="missionStatus">
                { item.joined ? (
                  <button className="notMember" type="button" onClick={() => handleLeave(item.id)} disabled>Active Member</button>
                ) : (
                  <button className="member" type="button" onClick={() => handleJoin(item.id)} disabled>NOT A MEMBER</button>
                ) }
              </td>
              <td>
                { item.joined ? (
                  <button className="leave" type="button" onClick={() => handleLeave(item.id)}>Leave Mission</button>
                ) : (
                  <button className="join" type="button" onClick={() => handleJoin(item.id)}>Join Mission</button>
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
