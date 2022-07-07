import PropTypes from 'prop-types';
import './Dragons.css';

function Dragon(props) {
  const {
    id, name, img,
  } = props;

  return (
    <div className="dragon-info" id={id}>
      <img src={img} alt="dragon" className="imgDragon" />
      <h2 className="dragon-name">{name}</h2>
    </div>
  );
}

Dragon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Dragon;
