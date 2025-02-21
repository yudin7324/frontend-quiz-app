import PropTypes from 'prop-types';
import './button.scss';

function Button({ text, onClick }) {
  return (
    <button
      className='button heading-s' 
      type='button' 
      aria-label='button'
      onClick={onClick}
      id="submit-button"
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
