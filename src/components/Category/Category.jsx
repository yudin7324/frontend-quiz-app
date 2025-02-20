import PropTypes from 'prop-types';
import './category.scss';

function Category({ text, icon }) {
  return (
    <div className="category">
      <div className='category__icon'>
        <img src={`.${icon}`} alt="header category" />
      </div>
      <div className='category__text heading-s'> 
        {text}
      </div>
    </div>
  )
}

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Category
