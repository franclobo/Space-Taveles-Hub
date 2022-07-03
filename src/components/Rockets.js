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
          <div key={item.id} className="rocketContainer">
            <img className="picture" src={item.image} alt="rocket" />
            <div className="rocket-info">
              <h1 className="rocketTitle">{item.name}</h1>

              <p className="description">
                {/* switch badgets for Rockets conditional components */}
                {item.reserved && (<span className="msg">Reserved</span>)}
                <span> </span>
                {item.description}
              </p>
              { item.reserved ? (
                <button className="cancelRocket" type="button" onClick={() => handleUnreserve(item.id)}>Cancel Reservation</button>
              ) : (
                <button className="reserveRocket" type="button" onClick={() => handleReserve(item.id)}>Reserve Rocket</button>
              ) }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
