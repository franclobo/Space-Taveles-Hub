import { useEffect, useState } from 'react';
import axios from 'axios';

// fetch rockets
function Rockets() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://api.spacexdata.com/v3/rockets');
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="rocket-container">
      {
        data.map((item) => (
          <div key={item.rocket_id}>
            <h1>{item.rocket_name}</h1>
            <img src={item.flickr_images[1]} alt="rocket" />
            <p>{item.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
