import PropTypes from 'prop-types';
import './sectionBtn.scss';

function SectionBtn({ text, icon, color }) {
  return (
    <button className={`section-btn heading-s ${color ? color : ''}`} type='btn' aria-label='section btn'>
      {icon}
      {text}
    </button>
  )
}

SectionBtn.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
}

export default SectionBtn
