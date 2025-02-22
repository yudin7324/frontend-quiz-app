import IconMoon from '@/components/Icons/IconMoon';
import IconSun from '@/components/Icons/IconSun';
import { useTheme } from '@/hooks/useTheme';
import './switch.scss';

function Switch() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className={`switch ${darkMode ? "dark" : "light"}`} 
      tabIndex={0}
      aria-label='switch theme button'
    >
      <span className="switch__icon">
        <IconSun />
      </span>
      <span className='switch__wrap'>
        <span className="switch__toggle" />
      </span>
      <span className="switch__icon">
      <IconMoon />
      </span>
    </button>
  )
}

export default Switch
