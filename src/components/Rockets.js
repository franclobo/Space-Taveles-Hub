import React from 'react';
import PropTypes from 'prop-types';

function Rockets(props) {
  const {
    id, title, img, info,
  } = props;

  return (
    <div className="rocket-container">
      <div>
        <ul className="rocket-data">
          <li className="rocket-img">{img}</li>
          <li className="rocket-title">{title}</li>
          <li className="rocket-info">{info}</li>
        </ul>
        <div className="button-rocket">
          <button type="button" className="reserveBtn" Key={id}>Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
}

Rockets.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Rockets.defaultProps = {
  id: '',
  title: '',
  info: '',
  img: '',
};

export default Rockets;
