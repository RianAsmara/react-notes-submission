import PropTypes from 'prop-types';
 
function PublishButton({ id, onPublished }) {
  return <button className='notes-item__archived' onClick={() => onPublished(id)}>Publish</button>
}
 
PublishButton.propTypes = {
  id: PropTypes.string.isRequired,
  onPublished: PropTypes.func
};
export default PublishButton;