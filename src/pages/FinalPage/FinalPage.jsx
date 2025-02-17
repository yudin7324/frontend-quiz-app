import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';
import Category from "@/components/Category/Category";
import Button from "@/components/Button/Button";
import './finalPage.scss';

function FinalPage() {
  return (
    <div className='final-page'>
      <div className='container'> 
        <Header category={<Category icon={<IconAccessibility />} text="Accsesability" />}/>

        <div className='final-page__wrap'>
            <div className="final-page__heading">
              <h1 className="final-page__title heading-l">Quiz completed <span>You scored...</span></h1>
            </div>

            <div>
              <div className="final-page__result">
                <Category icon={<IconAccessibility />} text="Accsesability" />
                <div className="final-page__count display">8</div>
                <div className="final-page__count-all body-m">out of 10</div>
              </div>
              <Button text="Play Again" onClick={() => console.log('click')} />
            </div>

           
           
        </div>
      </div>
    </div>
  )
}

export default FinalPage
