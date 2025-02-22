// useResult.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useResult = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [quizIcon, setQuizIcon] = useState('');
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const finalScore = localStorage.getItem('finalScore');
    const total = localStorage.getItem('totalQuestions');
    const icon = localStorage.getItem('quizIcon');
    const category = localStorage.getItem('categoryName');

    if (finalScore) {
      setScore(parseInt(finalScore, 10));
    }
    if (total) {
      setTotalQuestions(parseInt(total, 10));
    }
    if (icon) {
      setQuizIcon(icon);
    }
    if (category) {
      setCategoryName(category);
    }
  }, []);

  const handlePlayAgain = () => {
    localStorage.clear();
    navigate('/');
  };

  return {
    score,
    totalQuestions,
    quizIcon,
    categoryName,
    handlePlayAgain,
  };
};

export default useResult;
