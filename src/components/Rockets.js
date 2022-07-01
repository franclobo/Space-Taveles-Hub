import React, {
  useEffect, useDispatch, shallowEqual, useSelector,
} from 'react';
import { loadRockets } from '../redux/Rockets/rocket';
import Rocket from './Rocket';

function Rockets() {
  const listRockets = useSelector((store) => store.rockets, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRockets());
  }, []);

  return (
    <div className="rocket-container">
      <div>
        {listRockets.map((rocket) => (
          <Rocket
            key={rocket.rocket_id}
            name={rocket.rocket_name}
            img={rocket.flickr_images}
            description={rocket.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Rockets;
