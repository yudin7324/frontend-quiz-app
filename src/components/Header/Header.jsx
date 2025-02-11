import PropTypes from 'prop-types';

import './header.scss';

function Header({ icon, title }) {
  return (
    <header className='header'>
      <div className='header__title'>
        <div className='header__icon'>
          {icon}
        </div>
        <div className='heading-s'>
          {title}
        </div>
      </div>

      <div className='header__switch'>
      switch
      </div>
    </header>
  )
}

Header.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
