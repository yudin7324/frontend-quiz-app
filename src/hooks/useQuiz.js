// useQuiz.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useQuiz = (category) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [quizIcon, setQuizIcon] = useState(() => parseInt(localStorage.getItem('quizIcon')) || '');
  const [categoryName, setCategoryName] = useState(() => localStorage.getItem('categoryName') || '');
  const [currentQuestion, setCurrentQuestion] = useState(() => parseInt(localStorage.getItem('currentQuestion')) || 0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(() => JSON.parse(localStorage.getItem('showAnswer')) || false);
  const [answerState, setAnswerState] = useState(() => JSON.parse(localStorage.getItem('answerState')) || {});
  const [correctAnswers, setCorrectAnswers] = useState(() => parseInt(localStorage.getItem('correctAnswers')) || 0);
  const [isSelectMessage, setIsSelectMessage] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedQuiz = data.quizzes.find((quiz) => quiz.title.toLowerCase() === category.toLowerCase());
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
  }, [currentQuestion, showAnswer, answerState, correctAnswers, quizIcon, categoryName]);

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

  return {
    questions,
    quizIcon,
    categoryName,
    currentQuestion,
    selectedAnswer,
    showAnswer,
    answerState,
    correctAnswers,
    isSelectMessage,
    setSelectedAnswer,
    handleSubmit,
    handleNext,
  };
};

export default useQuiz;
