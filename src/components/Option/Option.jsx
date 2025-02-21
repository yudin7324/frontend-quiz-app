import PropTypes from 'prop-types';
import IconCorrect from '@/components/Icons/IconCorrect';
import IconError from '@/components/Icons/IconError';
import './option.scss';

function Option({ text, onClick, index, isCorrect, disabled }) {

  function setVariant(index) {
    switch (index) {
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D'; 
      default:
        return 'A';
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick();
      document.getElementById('submit-button')?.focus();
    }
  };

  return (
    <label 
      className="option heading-s" 
      htmlFor={index}
    >
      <input 
        className="option__input"   
        type="radio"
        id={index}
        value={text}
        name="option"
        onClick={onClick}
        disabled={disabled}
        onKeyDown={handleKeyDown}
      />
      <div className={`option__wrap ${isCorrect !== undefined ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
        <div className="option__variant">
          {setVariant(index)}
        </div>
        {text}
        <div className='option__icon'>
          {isCorrect !== undefined ? (isCorrect ? <IconCorrect /> : <IconError />) : null}
        </div>
      </div>
    </label>
  );
}

Option.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Option;
