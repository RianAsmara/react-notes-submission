import React from 'react';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNotes } from '../utils/notes-data';
import NotesList from '../components/NotesList';

function PublishedNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <PublishedNotes defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class PublishedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.defaultKeyword || '',
      published: getAllNotes().filter(note => note.archived === false),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onPublishHandler = this.onPublishHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.published.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onPublishHandler(id) {
    const newNotes = [...this.state.published];
    const noteIndex = newNotes.findIndex(n => n.id === id);
    if (newNotes[noteIndex].archived === true) {

      newNotes[noteIndex].archived = false;

    } else {

      newNotes[noteIndex].archived = true;

    }
    this.setState({ notes: newNotes });
  }

  onArchivedHandler(id) {
    const newNotes = [...this.state.published];
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
    const notes = this.state.published.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <div className="contact-app">
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

PublishedNotes.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func
}

export default PublishedNotesPageWrapper