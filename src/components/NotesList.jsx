import NotesItem from "./NotesItem"
import PropTypes from 'prop-types';

function NotesList({ notes, onDelete, onArchived, onPublished }) {
  return (
    <>
      <div className="notes-list">
        {
          notes.length === 0 ? (
            <p className='empty-data'>Tidak ada catatan</p>
          ) : (
            notes.map((note) => (
              <NotesItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchived={onArchived}
                onPublished={onPublished}
                {...note} />
            ))
          )
        }
      </div>
    </>
  )
}

NotesList.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
  onArchived: PropTypes.func,
  onPublished: PropTypes.func,
};
export default NotesList