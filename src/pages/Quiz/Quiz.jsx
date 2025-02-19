import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header'
import IconAccessibility from '@/components/icons/IconAccessibility';
import Option from '@/components/Option/Option';
import Category from '@/components/Category/Category';
import Button from '@/components/Button/Button';
import IconError from '@/components/Icons/IconError';
import './quiz.scss';

function Quiz() {
  const { category } = useParams(); 
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isSelectMessage, setIsSelectMessage] = useState(false);
  const [answerState, setAnswerState] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedQuiz = data.quizzes.find(q => q.title.toLowerCase() === category.toLowerCase());
        if (selectedQuiz) {
          setQuestions(selectedQuiz.questions);
        }
      });
  }, [category]);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setIsSelectMessage(true);
      return;
    }

    const current = questions[currentQuestion];
    const isCorrect = selectedAnswer === current.answer;

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
      navigate("/result");
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  const question = questions[currentQuestion];

  return (
    <div className='quiz'>
      <div className="container">
        <Header category={<Category icon={<IconAccessibility />} text="Accessibility" />} />

        <div className="quiz__wrap">
          <div className="quiz__heading">
            <p className="quiz__text body-s">Question {currentQuestion + 1} of 10</p>
            <h1 className="quiz__title heading-m">{question.question}</h1>
          </div>

          <div>
            <div className="quiz__btns">
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
            <Button 
              text={showAnswer ? "Next Question" : "Submit Answer"} 
              onClick={showAnswer ? handleNext : handleSubmit} 
            />
            {isSelectMessage && <div className="quiz__message body-m"><IconError />Please select an answer</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
