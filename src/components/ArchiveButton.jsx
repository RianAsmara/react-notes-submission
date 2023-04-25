import PropTypes from 'prop-types';
 
// eslint-disable-next-line react/prop-types
function ArchivedButton({ id, onArchived }) {
  return <button className='notes-item__archived' onClick={() => onArchived(id)}>Archived</button>
}

ArchivedButton.propTypes = {
  id: PropTypes.number.isRequired,
  onArchived: PropTypes.func
};
 
export default ArchivedButton;