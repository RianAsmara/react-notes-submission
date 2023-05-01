import PropTypes from 'prop-types';
 
function ArchivedButton({ id, onArchived }) {
  return <button className='notes-item__archived' onClick={() => onArchived(id)}>Archived</button>
}

ArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.func
};
 
export default ArchivedButton;