import React from 'react';
import ListNotesPageWrapper from '../pages/ListNotes';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import CreateNote from '../pages/CreateNote';
import NotFoundPage from '../pages/NotFound';
import DetailNote from '../pages/DetailNote';
import { getAllNotes, countPublished, countArchived } from '../utils/notes-data';
import ArchivedNotes from '../pages/ArchivedNotes'
import PublishedNotes from '../pages/PublishedNotes'
class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      published: getAllNotes().filter(note => note.archived === false),
      archieved: getAllNotes().filter(note => note.archived === true),
      countPub: countPublished(),
      countArc: countArchived(),
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
        <header>
          <Navigation countPublished={this.state.countPub} countArchive={this.state.countArc} />
        </header>
        <main>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<ListNotesPageWrapper />} />
            <Route path='add-note' element={<CreateNote/>} />
            <Route path='detail-note/:id' element={<DetailNote />} />
            <Route path='archived' element={<ArchivedNotes />} />
            <Route path='published' element={<PublishedNotes />} />
          </Routes>
        </main>
      </div>
    )
  }
}

export default NotesApp