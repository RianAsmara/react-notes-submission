 
// eslint-disable-next-line react/prop-types
function PublishButton({ id, onPublished }) {
  return <button className='notes-item__archived' onClick={() => onPublished(id)}>Publish</button>
}
 
export default PublishButton;