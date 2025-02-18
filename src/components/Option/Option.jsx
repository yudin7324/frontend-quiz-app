import PropTypes from 'prop-types';
import IconCorrect from '@/components/Icons/IconCorrect';
import IconError from '@/components/Icons/IconError';
import './option.scss';

function Option({ text, onClick, index, isCorrect }) {

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

  return (
    <label 
      className="option heading-s" 
      // htmlFor={variant}
    >
      <input 
        className="option__input"   
        type="radio"
        // id={variant}
        // value={variant}
        name="option"
        onClick={onClick}
      />
      <div className={`option__wrap ${isCorrect !== null ? isCorrect ? 'correct' : 'incorrect' : ''}`}>
      {/* <div className={`option__wrap`}> */}
        <div className="option__variant">
          {/* {variant} */}
          {setVariant(index)}
        </div>
        {text}
        <div className='option__icon'>
          {isCorrect !== null ? (isCorrect ? <IconCorrect /> : <IconError />) : null}
        </div>
      </div>
    </label>
  );
}

Option.propTypes = {
  // variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool,
}

export default Option;
