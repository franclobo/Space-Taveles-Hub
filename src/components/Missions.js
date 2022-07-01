import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch Missions.
function Missions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://api.spacexdata.com/v3/missions');
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <table className="mission-container">
      <tr>

        <td><h1>Mision</h1></td>

        <td><h1>Description</h1></td>

        <td><h1>Status</h1></td>

      </tr>
      {
        data.map((item) => (
          <tr key={item.mission_id}>

            <td><h1>{item.mission_name}</h1></td>

            <td><p>{item.description}</p></td>

            <td><button type="button">Reserve mission</button></td>

          </tr>
        ))
      }
    </table>
  );
}

export default Missions;
