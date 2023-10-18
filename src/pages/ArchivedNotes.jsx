import React from 'react';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNotes } from '../utils/notes-data';
import NotesList from '../components/NotesList';

function ArchivedNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <ArchivedNotes defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class ArchivedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.defaultKeyword || '',
      archieved: getAllNotes().filter(note => note.archived === true)
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onPublishHandler = this.onPublishHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.archieved.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onPublishHandler(id) {
    const newNotes = [...this.state.archieved];
    const noteIndex = newNotes.findIndex(n => n.id === id);
    if (newNotes[noteIndex].archived === true) {

      newNotes[noteIndex].archived = false;

    } else {

      newNotes[noteIndex].archived = true;

    }
    this.setState({ notes: newNotes });
  }

  onArchivedHandler(id) {
    const newNotes = [...this.state.archieved];
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

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);

  }

  render() {
    const notes = this.state.archieved.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    if (notes === null) {
      return <p>Arsip kosong</p>;
    }

    return (
      <div className="notes-app">
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />

          <NotesList
            notes={notes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
            onPublished={this.onPublishHandler}
          />
      </div>
    )
  }
}

ArchivedNotes.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func
}

export default ArchivedNotesPageWrapper