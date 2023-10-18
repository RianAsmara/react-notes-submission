import { useNavigate } from 'react-router-dom';

import NoteForm from "../components/NoteForm";
import { addNote } from '../utils/notes-data';

function CreateNote() {

  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note)
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah Note</h2>
      <NoteForm addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default CreateNote;