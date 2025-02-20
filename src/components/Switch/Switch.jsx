import IconMoon from '@/components/icons/IconMoon';
import IconSun from '@/components/icons/IconSun';
import { useTheme } from '@/components/ThemeProvider/ThemeProvider';
import './switch.scss';

function Switch() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`switch ${darkMode ? "dark" : "light"}`}>
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
