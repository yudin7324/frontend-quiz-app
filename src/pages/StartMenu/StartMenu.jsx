import Header from "@/components/Header/Header"
import IconAccessibility from '@/components/icons/IconAccessibility';

function StartMenu() {
  return (
    <div className="start-menu">
      <div className="container">
        <Header icon={<IconAccessibility />} title="Accessibility"/>
      </div>
    </div>
  )
}

export default StartMenu
