import NotesItem from "./NotesItem"
// eslint-disable-next-line react/prop-types
function NotesList({ notes, onDelete, onArchived, onPublished }) {
  return (
    <>
      <div className="notes-list">
        {
          // eslint-disable-next-line react/prop-types
          notes.length === 0 ? (
            <p className='empty-data'>Tidak ada catatan</p>
          ) : (
            // eslint-disable-next-line react/prop-types
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

export default NotesList