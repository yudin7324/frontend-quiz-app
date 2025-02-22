import { useState, useEffect } from 'react';
import Header from "@/components/Header/Header"
import QuizCategory from "@/components/QuizCategory/QuizCategory";
import './home.scss';

function StartMenu() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setQuizzes(data.quizzes));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <Header/>
        <div className="home__wrap">
          <div className="home__heading">
            <h1 className="home__title heading-l">Welcome to the <span>Frontend Quiz!</span></h1>
            <p className="home__text body-s">Pick a subject to get started.</p>
          </div>
          <div className="home__btns">
            {quizzes.map((quiz) =>
              <QuizCategory
                key={quiz.title} 
                icon={quiz.icon} 
                text={quiz.title} 
                path={`/quiz/${quiz.title.toLowerCase()}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartMenu
