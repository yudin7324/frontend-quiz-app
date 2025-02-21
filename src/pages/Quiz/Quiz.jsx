import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Option from '@/components/Option/Option';
import Category from '@/components/Category/Category';
import Button from '@/components/Button/Button';
import Slider from '@/components/Slider/Slider';
import IconError from '@/components/Icons/IconError';
import './quiz.scss';

function Quiz() {
  const { category } = useParams(); 
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [quizIcon, setQuizIcon] = useState(() => {
    return parseInt(localStorage.getItem('quizIcon')) || '';
  });
  const [categoryName, setCategoryName] = useState(() => {
    return parseInt(localStorage.getItem('categoryName')) || '';
  });
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    return parseInt(localStorage.getItem('currentQuestion')) || 0;
  });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(() => {
    return JSON.parse(localStorage.getItem('showAnswer')) || false;
  });
  const [isSelectMessage, setIsSelectMessage] = useState(false);
  const [answerState, setAnswerState] = useState(() => {
    return JSON.parse(localStorage.getItem('answerState')) || {};
  });
  const [correctAnswers, setCorrectAnswers] = useState(() => {
    return parseInt(localStorage.getItem('correctAnswers')) || 0;
  });

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedQuiz = data.quizzes.find((quiz) => {
          return quiz.title.toLowerCase() === category.toLowerCase()
        });

        if (selectedQuiz) {
          setQuestions(selectedQuiz.questions);
          setQuizIcon(selectedQuiz.icon);
          setCategoryName(selectedQuiz.title);
        }
      });
  }, [category]);

  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('showAnswer', JSON.stringify(showAnswer));
    localStorage.setItem('answerState', JSON.stringify(answerState));
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('quizIcon', quizIcon);
    localStorage.setItem('categoryName', categoryName);
  },[
    currentQuestion, 
    showAnswer, 
    answerState, 
    correctAnswers, 
    quizIcon, 
    categoryName
  ]);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setIsSelectMessage(true);
      return;
    }

    const current = questions[currentQuestion];
    const isCorrect = selectedAnswer === current.answer;

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    setAnswerState(
      isCorrect
        ? { [selectedAnswer]: true }
        : { [selectedAnswer]: false, [current.answer]: true }
    );

    setIsSelectMessage(false);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setAnswerState({});
    } else {
      localStorage.setItem('finalScore', correctAnswers);
      navigate('/result');
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  const question = questions[currentQuestion];

  return (
    <div className='quiz'>
      <div className='container'>
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
                    setShowAnswer(false);
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
    </div>
  );
}

export default Quiz;
