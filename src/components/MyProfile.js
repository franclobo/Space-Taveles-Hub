import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rocket = useSelector((state) => state.rockets);
  const rocketList = rocket.filter((item) => item.reserved === true);
  const mission = useSelector((state) => state.missions);
  const missionList = mission.filter((item) => item.joined === true);
  return (
    <div className="myprofile">
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
      <div className="rockets-myprofile">
        <h1>My Rockets</h1>
        <div>
          {rocketList.map((item) => (
            <div className="rockets-myprofile-item" key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
