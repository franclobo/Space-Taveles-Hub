import { useSelector, useDispatch } from 'react-redux';
import { FetchMission, joinMission, leaveMission } from '../../redux/Missions/missions';
import './Missions.css';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  if (missions.length === 0) {
    dispatch(FetchMission());
  }
  return (
    <div>
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
          missions.map((mission) => (
            <tr className="tableBody" key={mission.id}>
              <td className="missionTitle"><h1>{mission.name}</h1></td>
              <td className="mission-description"><p>{mission.description}</p></td>
              <td className="missionStatus">
                { mission.joined ? (
                  <button className="member" type="button" onClick={() => handleLeave(mission.id)} disabled>Active Member</button>
                ) : (
                  <button className="notMember" type="button" onClick={() => handleJoin(mission.id)} disabled>NOT A MEMBER</button>
                ) }
              </td>
              <td>
                { mission.joined ? (
                  <button className="leave" type="button" onClick={() => handleLeave(mission.id)}>Leave Mission</button>
                ) : (
                  <button className="join" type="button" onClick={() => handleJoin(mission.id)}>Join Mission</button>
                ) }
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
