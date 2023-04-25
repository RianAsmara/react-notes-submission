import NotesItemBody from "./NotesItemBody"
import DeleteButton from "./DeleteButton"
import ArchivedButton from "./ArchiveButton"
import PublishButton from "./PublishButton"
// eslint-disable-next-line react/prop-types
function NotesItem({ title, body, archived, createdAt, id, onDelete, onArchived, onPublished }) {
  return (
    <>
      <div className="notes-item">
        <NotesItemBody title={title} body={body} archived={archived} createdAt={createdAt} />
        <div className="notes-action">
          <DeleteButton id={id} onDelete={onDelete} />
          {
            archived ?
              <PublishButton id={id} onPublished={onPublished} /> :
              <ArchivedButton id={id} onArchived={onArchived} />
          }
        </div>
      </div>
    </>
  )
}

export default NotesItem