import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';
import QuestionBtn from "@/components/QuestionBtn/QuestionBtn";
import './questionPage.scss';

function QuestionPage() {

  const btns = [
      { variant: 'A', text: 'HTML', isCorrect: true },
      { variant: 'B', text: 'CSS', isCorrect: null },
      { variant: 'C', text: 'Javascript', isCorrect: false },
      { variant: 'D', text: 'Accessibility', isCorrect: null },
    ]

  return (
    <div className='question-page'>
      <div className="container">
         <Header icon={<IconAccessibility />} title="Accessibility"/>

         <div className="question-page__wrap">
            <div className="question-page__heading">
              <p className="question-page__text body-s">Question 6 of 10</p>
              <h1 className="question-page__title heading-m">Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h1>
            </div>

            <div className="question-page__btns">
              {btns.map((btn) => {
                return <QuestionBtn 
                  key={btn.variant}
                  variant={btn.variant}
                  text={btn.text} 
                  isCorrect={btn.isCorrect}
                />
              })}
            </div>
         </div>
      </div>
    </div>
  )
}

export default QuestionPage
