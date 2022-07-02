import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadRockets,
  reserveRocket,
  unreserveRocket,
} from '../redux/Rockets/rocket';

// fetch rockets
function Rockets() {
  const rocket = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleUnreserve = (id) => {
    dispatch(unreserveRocket(id));
  };

  return (
    <div className="rocket-container">
      {
        rocket.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt="rocket" />
            <p>{item.description}</p>
            { item.reserved ? (
              <button type="button" onClick={() => handleUnreserve(item.id)}>Cancel Reservation</button>
            ) : (
              <button type="button" onClick={() => handleReserve(item.id)}>Reserve Rocket</button>
            ) }
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
