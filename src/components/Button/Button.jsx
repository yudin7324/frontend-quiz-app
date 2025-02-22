import PropTypes from 'prop-types';
import './button.scss';

function Button({ text, onClick }) {
  return (
    <button
      className='button' 
      type='button' 
      aria-label='button'
      onClick={onClick}
      id="submit-button"
    >
      <span className='heading-s'>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
