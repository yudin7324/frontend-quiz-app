import { useNavigate } from "react-router-dom";
import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';
import IconCss from '@/components/icons/IconCss';
import IconHtml from '@/components/icons/IconHtml';
import IconJs from '@/components/icons/IconJs';
import CategoryBtn from "@/components/CategoryBtn/CategoryBtn";
import './startMenu.scss';



function StartMenu() {

  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate("/questions", { state: { category } });
  };


  const sectionBtns = [
    { icon: <IconHtml />, text: 'HTML', color: 'orange' },
    { icon: <IconCss />, text: 'CSS', color: 'green' },
    { icon: <IconJs />, text: 'Javascript', color: 'blue' },
    { icon: <IconAccessibility />, text: 'Accessibility', color: 'purple' },
  ]

  return (
    <div className="start-menu">
      <div className="container">
        <Header/>

        <div className="start-menu__wrap">
          <div className="start-menu__heading">
            <h1 className="start-menu__title heading-l">Welcome to the <b>Frontend Quiz!</b></h1>
            <p className="start-menu__text body-s">Pick a subject to get started.</p>
          </div>

          <div className="start-menu__btns">
            {sectionBtns.map((btn) =>
              <CategoryBtn
                key={btn.text} 
                icon={btn.icon} 
                text={btn.text} 
                color={btn.color}
                onClick={() => handleCategorySelect(btn.text)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartMenu
