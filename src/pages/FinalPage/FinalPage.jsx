import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';
import './finalPage.scss';

function FinalPage() {
  return (
    <div className='final-page'>
      <div className='container'> 
        <Header icon={<IconAccessibility />} title="Accessibility"/>

        <div className='final-page__wrap'>
            <div className="final-page__heading">
              <h1 className="final-page__title heading-l">Quiz completed <span>You scored...</span></h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinalPage
