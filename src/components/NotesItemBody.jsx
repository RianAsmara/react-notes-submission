import { showFormattedDate } from "../utils/todos"

// eslint-disable-next-line react/prop-types
function NotesItemBody({ title, archived, body, createdAt }) {
  return (
    <>
      <div className="notes-item__body">
        <h3 className="notes-item__title">{title}</h3>
        <div className="subheader-wrapper">
          <span className="notes-item__createdAt">{showFormattedDate(createdAt)}</span>
          <p className="notes-item__status" style={{
            backgroundColor: archived ? "#F9D949" : "#3C486B",
            color: archived ? "#3C486B" : "#F0F0F0",
          }}
          >{archived ? 'Archived' : 'Published'}</p>
        </div>
        <p className="notes-item__content">{body}</p>
      </div>
    </>
  )
}

export default NotesItemBody