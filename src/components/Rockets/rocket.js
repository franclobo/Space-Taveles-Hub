import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CancelReserve, ReserveRocket } from '../../redux/Rockets/Rockets';

function Rocket(props) {
  const {
    id, name, description, img, reserved,
  } = props;

  const dispatch = useDispatch();

  const ReserveRocketHandler = () => {
    dispatch(ReserveRocket(id));
  };

  const CancelRocketHandler = () => {
    dispatch(CancelReserve(id));
  };

  return (
    <div className="rocketContainer" id={id}>
      <img src={img} alt="Rocket" />
      <div className="rocketInfo">
        <h4>{name}</h4>
        <div className="description">
          {reserved && (
            <div>
              <p>
                <span className="reserved">Reserved</span>
                {description}
              </p>
            </div>
          )}
          {!reserved && (
            <div>
              <p>{description}</p>
            </div>
          )}
        </div>
        {reserved && (
          <button
            type="button"
            className="cancelBtn"
            onClick={() => {
              CancelRocketHandler();
            }}
          >
            Cancel Reserve
          </button>
        )}
        {!reserved && (
          <button
            type="button"
            className="reserveBtn"
            onClick={() => {
              ReserveRocketHandler();
            }}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = { reserved: false };

export default Rocket;
