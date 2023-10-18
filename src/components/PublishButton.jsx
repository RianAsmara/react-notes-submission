import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext';
 
function PublishButton({ id, onPublished }) {
  return (
          // <button className='notes-item__archived' onClick={() => onPublished(id)}>{ locale === 'id' ? 'Rilis' : 'Publish' }</button>
          <button className='notes-item__archived' onClick={() => onPublished(id)}>Publish</button>
  )
}
 
PublishButton.propTypes = {
  id: PropTypes.string.isRequired,
  onPublished: PropTypes.func
};
export default PublishButton;