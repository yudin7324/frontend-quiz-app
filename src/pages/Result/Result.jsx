import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';
import Category from "@/components/Category/Category";
import Button from "@/components/Button/Button";
import './result.scss';

function Result() {
  return (
    <div className='result'>
      <div className='container'> 
        <Header category={<Category icon={<IconAccessibility />} text="Accsesability" />}/>

        <div className='result__wrap'>
            <div className="result__heading">
              <h1 className="result__title heading-l">Quiz completed <span>You scored...</span></h1>
            </div>

            <div>
              <div className="result__result">
                <Category icon={<IconAccessibility />} text="Accsesability" />
                <div className="result__count display">8</div>
                <div className="result__count-all body-m">out of 10</div>
              </div>
              <Button text="Play Again" onClick={() => console.log('click')} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Result
