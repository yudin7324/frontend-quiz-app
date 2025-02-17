import PropTypes from 'prop-types';
import Switch from '@/components/Switch/Switch';
import './header.scss';

function Header({ category }) {
  return (
    <header className='header'>
      {category}
      <div className='header__switch'>
        <Switch />
      </div>
    </header>
  )
}

Header.propTypes = {
  category: PropTypes.element,
}

export default Header
