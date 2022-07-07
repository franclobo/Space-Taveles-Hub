import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const missionList = missions.filter((item) => item.joined === true);
  const dragon = useSelector((state) => state.dragons);
  const dragonList = dragon.filter((item) => item.reserved === true);
  const rockets = useSelector((state) => state.rockets);
  const rocketList = rockets.filter((item) => item.reserved === true);

  return (
    <div className="list-conatiner">
      <div className="list-container">
        <div className="rocket-myprofile">
          <h1>My Rockets</h1>
          {rocketList.map((item) => (
            <div className="rockets-myprofile-item" key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="mission-myprofile">
          <h1>My Missions</h1>
          <div>
            {missionList.map((item) => (
              <div className="mission-myprofile-item" key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dragons-myprofile">
          <h1>My Dragons</h1>
          <div>
            {dragonList.map((item) => (
              <div className="dragons-myprofile-item" key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
