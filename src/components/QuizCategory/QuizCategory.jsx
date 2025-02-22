import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './quizCategory.scss';

function QuizCategory({ text, icon, path }) {
  return (
    <Link
      className={`quiz-category heading-s`} 
      to={path}
    >
      <img src={icon} alt="icon" />
      {text}
    </Link>
  )
}

QuizCategory.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default QuizCategory
