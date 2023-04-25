 import { FiTrash } from 'react-icons/fi'

// eslint-disable-next-line react/prop-types
function DeleteButton({ id, onDelete }) {
  return <button className='notes-item__delete' onClick={() => onDelete(id)}><FiTrash /></button>
}
 
export default DeleteButton;