import IconMoon from '@/components/Icons/IconMoon';
import IconSun from '@/components/Icons/IconSun';
import { useTheme } from '@/hooks/useTheme';
import './switch.scss';

function Switch() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`switch ${darkMode ? "dark" : "light"}`} tabIndex={0}>
      <div className="switch__icon">
        <IconMoon />
      </div>
      <div className='switch__wrap'>
        <div className="switch__toggle" />
      </div>
      <div className="switch__icon">
        <IconSun />
      </div>
    </button>
  )
}

export default Switch
