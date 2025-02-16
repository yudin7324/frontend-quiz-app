import PropTypes from 'prop-types';
import IconCorrect from '@/components/Icons/IconCorrect';
import IconError from '@/components/Icons/IconError';
import './questionBtn.scss';

function QuestionBtn({ variant, text, isCorrect }) {
  return (
    <label 
      className="question-btn heading-s" 
      htmlFor={variant}
    >
      <input 
        className="question-btn__input"   
        type="radio"
        id={variant}
        value={variant}
        name="question"
      />
      <div className={`question-btn__wrap ${isCorrect !== null ? isCorrect ? 'correct' : 'incorrect' : ''}`}>
        <div className="question-btn__variant">
          {variant}
        </div>
        {text}
        <div className='question-btn__icon'>
          {isCorrect !== null ? (isCorrect ? <IconCorrect /> : <IconError />) : null}
        </div>
      </div>
    </label>
  );
}

QuestionBtn.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool,
}

export default QuestionBtn;
