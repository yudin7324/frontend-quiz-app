import PropsType from 'prop-types';
import './slider.scss';

function Slider({ value, length }) {
  return (
    <input
      className="slider"
      type="range"
      min="0"
      max={length}
      step="1"
      value={value}
      style={{'--slider-progress': `${(value / length) * 100}%`,}}
      aria-label="slider-range"
      tabIndex={-1}
    />
  )
}

Slider.propTypes = {
  value: PropsType.number.isRequired,
  length: PropsType.number.isRequired,
}


export default Slider
