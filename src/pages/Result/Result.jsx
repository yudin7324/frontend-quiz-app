// Result.jsx
import Header from '@/components/Header/Header';
import Category from '@/components/Category/Category';
import Button from '@/components/Button/Button';
import useResult from '@/hooks/useResult';
import './result.scss';

function Result() {
  const { score, totalQuestions, quizIcon, categoryName, handlePlayAgain } = useResult();

  return (
    <div className='result'>
      <div className='container'> 
        <Header category={<Category icon={quizIcon} text={categoryName} />} />

        <div className='result__wrap'>
          <div className='result__heading'>
            <h1 className='result__title heading-l'>
              Quiz completed <span>You scored...</span>
            </h1>
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
