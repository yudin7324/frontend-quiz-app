import { useState, useEffect } from 'react';
import IconMoon from '@/components/icons/IconMoon';
import IconSun from '@/components/icons/IconSun';
import './switch.scss';

function Switch() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`switch ${darkMode ? "dark" : "light"}`}
    >
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
