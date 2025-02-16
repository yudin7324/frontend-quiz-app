import PropTypes from 'prop-types';
import './categoryBtn.scss';

function CategoryBtn({ text, icon, color, onClick }) {
  return (
    <button 
      className={`category-btn heading-s ${color ? color : ''}`} 
      onClick={onClick}
      type='btn' 
      aria-label='category btn'
    >
      {icon}
      {text}
    </button>
  )
}

CategoryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CategoryBtn
