import React from 'react';
import PropTypes from 'prop-types';

function Rocket(props) {
  const {
    name, img, description,
  } = props;

  return (
    <div className="rocket">
      <div>
        <ul className="rocket-data">
          <li className="rocket-description">{description}</li>
          <li className="rocket-name">{name}</li>
          <li className="rocket-image">{img}</li>
        </ul>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  description: PropTypes.string,
};

Rocket.defaultProps = {
  name: '',
  img: '',
  description: '',
};

export default Rocket;
