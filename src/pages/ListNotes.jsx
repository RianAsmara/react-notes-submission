import React from 'react';
import NotesList from '../components/NotesList';
import { getInitialData } from '../utils/todos';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
 
  return <ListNotes defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class ListNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      keyword: props.defaultKeyword || '',

      notes: getInitialData(),
      published: getInitialData().filter(note => note.archived === false),
      archieved: getInitialData().filter(note => note.archived === true)
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onPublishHandler = this.onPublishHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    // eslint-disable-next-line react/prop-types
    this.props.keywordChange(keyword);

  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <div className="contact-app">
        <header>
          <Navigation />
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        </header>
        <main>
          <NotesList
            notes={notes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
            onPublished={this.onPublishHandler}
          />
        </main>
      </div>
    )
  }
}

ListNotes.propType = {
  defaultKeyword: PropTypes.string,
}

export default ListNotesPageWrapper