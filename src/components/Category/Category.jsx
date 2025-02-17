import PropTypes from 'prop-types';
import './category.scss';

function Category({ text, icon }) {
  return (
    <div className="category">
      <div className='category__icon'>
        {icon}
      </div>
      <div className='category__text heading-s'> 
        {text}
      </div>
    </div>
  )
}

Category.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

export default Category
