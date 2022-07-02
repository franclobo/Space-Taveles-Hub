import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRockets } from '../redux/Rockets/rocket';

// fetch rockets
function Rockets() {
  const rocket = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);

  return (
    <div className="rocket-container">
      {
        rocket.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt="rocket" />
            <p>{item.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
