import NotesItemBody from "./NotesItemBody"
import DeleteButton from "./DeleteButton"
import ArchivedButton from "./ArchiveButton"
import PublishButton from "./PublishButton"
import PropTypes from 'prop-types';

function NotesItem({ title, body, archived, createdAt, id, onDelete, onArchived, onPublished }) {
  return (
    <>
      <div className="notes-item">
        <NotesItemBody id={id} title={title} body={body} archived={archived} createdAt={createdAt} />
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
NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onArchived: PropTypes.func,
  onPublished: PropTypes.func,
};
export default NotesItem