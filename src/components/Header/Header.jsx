import PropTypes from 'prop-types';
import Switch from '@/components/Switch/Switch';
import './header.scss';

function Header({ icon, title }) {
  return (
    <header className='header'>

      {icon && title ? <div className='header__title'>
        <div className='header__icon'>
          {icon}
        </div>
        <div className='heading-s'>
          {title}
        </div>
      </div> : <></>}

      <div className='header__switch'>
        <Switch />
      </div>
    </header>
  )
}

Header.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired
}

export default Header
