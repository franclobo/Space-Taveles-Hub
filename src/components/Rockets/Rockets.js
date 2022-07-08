import { useSelector, useDispatch } from 'react-redux';
import { FetchRocket } from '../../redux/Rockets/Rockets';
import './Rockets.css';
import Rocket from './rocket';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (rockets.length === 0) {
    dispatch(FetchRocket());
  }

  return (
    <div>
      <ul className="rockets">
        {
          rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              img={rocket.img}
              reserved={rocket.reserved}
            />
          ))
        }
      </ul>
    </div>
  );
}
