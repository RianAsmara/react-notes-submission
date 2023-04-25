import React from 'react';
import NotesList from './NotesList';
import { getInitialData } from '../utils/todos';
import TodoForm from './NoteForm';

class NotesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      published: getInitialData().filter(note => note.archived === false),
      archieved: getInitialData().filter(note => note.archived === true)
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onPublishHandler = this.onPublishHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onPublishHandler(id) {
    const newNotes = [...this.state.notes];
    const noteIndex = newNotes.findIndex(n => n.id === id);
    if (newNotes[noteIndex].archived === true) {

      newNotes[noteIndex].archived = false;

    } else {

      newNotes[noteIndex].archived = true;

    }
    this.setState({ notes: newNotes });
  }

  onArchivedHandler(id) {
    const newNotes = [...this.state.notes];
    const noteIndex = newNotes.findIndex(n => n.id === id);
    if (newNotes[noteIndex].archived === false) {

      newNotes[noteIndex].archived = true;

    } else {

      newNotes[noteIndex].archived = false;

    }
    this.setState({ notes: newNotes });
  }


  onAddNoteHandler({ title, body, archived, createdAt }) {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Catatan Harianku</h1>
        <TodoForm addNote={this.onAddNoteHandler} />
        <h2 style={{
          visibility: this.state.notes.length > 0 ? 'visible' : 'hidden'
        }}>All Notes</h2>
        <hr style={{
          marginTop: '20px',
          marginBottom: '20px',
          visibility: this.state.notes.length > 0 ? 'visible' : 'hidden'
        }} />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHandler}
          onPublished={this.onPublishHandler}
        />
      </div>
    )
  }
}

export default NotesPage