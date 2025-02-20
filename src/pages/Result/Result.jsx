import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Category from '@/components/Category/Category';
import Button from '@/components/Button/Button';
import './result.scss';

function Result() {
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

  return (
    <div className='result'>
      <div className='container'> 
        <Header category={<Category icon={quizIcon} text={categoryName} />} />

        <div className='result__wrap'>
            <div className='result__heading'>
              <h1 className='result__title heading-l'>Quiz completed <span>You scored...</span></h1>
            </div>

            <div>
              <div className='result__result'>
                <Category icon={quizIcon} text={categoryName} />
                <div className='result__count display'>{score}</div>
                <div className='result__count-all body-m'>out of {totalQuestions}</div>
              </div>
              <Button text='Play Again' onClick={handlePlayAgain} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
