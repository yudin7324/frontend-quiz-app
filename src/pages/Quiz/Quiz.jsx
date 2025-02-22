// Quiz.jsx
import { useParams } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Option from '@/components/Option/Option';
import Category from '@/components/Category/Category';
import Button from '@/components/Button/Button';
import Slider from '@/components/Slider/Slider';
import IconError from '@/components/Icons/IconError';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useQuiz from '@/hooks/useQuiz';
import './quiz.scss';

function Quiz() {
  const { category } = useParams(); 
  const {
    questions,
    quizIcon,
    categoryName,
    currentQuestion,
    showAnswer,
    answerState,
    isSelectMessage,
    setSelectedAnswer,
    handleSubmit,
    handleNext,
  } = useQuiz(category);

  if (!questions.length) return <LoadingSpinner />;

  const question = questions[currentQuestion];

  return (
    <div className='quiz'>
      <Header category={<Category icon={quizIcon} text={categoryName} />} />
      <div className='quiz__wrap'>
        <div className='quiz__heading'>
          <p className='quiz__text body-s'>Question {currentQuestion + 1} of {questions.length}</p>
          <h1 className='quiz__title heading-m'>{question.question}</h1>
        </div>
        <div className='quiz__btns'>
          {question.options.map((option, index) => (
            <Option
              key={option}
              text={option}
              index={index}
              onClick={() => {
                if (!showAnswer) {
                  setSelectedAnswer(option);
                }
              }}
              isCorrect={answerState[option]}
              disabled={showAnswer}
            />
          ))}
        </div>
        <Slider value={currentQuestion + 1} length={questions.length} />
        <div className='quiz__submit'>
          <Button 
            text={showAnswer ? 'Next Question' : 'Submit Answer'} 
            onClick={showAnswer ? handleNext : handleSubmit} 
          />
          {isSelectMessage && <div className='quiz__message body-m'><IconError />Please select an answer</div>}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
