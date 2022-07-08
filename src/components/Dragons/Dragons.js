import { useSelector, useDispatch } from 'react-redux';
import { Fetchdragon, reserveDragon, unreserveDragon } from '../../redux/Dragons/dragons';
import Dragon from './Dragon';

export default function Dragons() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const handleUnreserve = (id) => {
    dispatch(unreserveDragon(id));
  };

  if (dragons.length === 0) {
    dispatch(Fetchdragon());
  }

  return (
    <div>
      <ul className="dragons">
        {
          dragons.map((dragon) => (
            <div key={dragon.id} className="dragon-container">
              <Dragon
                key={dragon.id}
                id={dragon.id}
                name={dragon.name}
                description={dragon.description}
                img={dragon.img}
              />
              {dragon.reserved ? (
                <button className="cancelDragon" type="button" onClick={() => handleUnreserve(dragon.id)}>Cancel Reservation</button>
              ) : (
                <button className="reserveDragon" type="button" onClick={() => handleReserve(dragon.id)}>Reserve Dragon</button>
              )}
            </div>
          ))
        }
      </ul>
    </div>
  );
}
