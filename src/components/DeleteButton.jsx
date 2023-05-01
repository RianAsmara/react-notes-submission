 import { FiTrash } from 'react-icons/fi'
 import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
  return <button className='notes-item__delete' onClick={() => onDelete(id)}><FiTrash /></button>
}
 
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func
};
export default DeleteButton;