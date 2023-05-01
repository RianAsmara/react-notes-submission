import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/notes-data';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailNote id={id}/>;
}

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}


DetailNote.propTypes = {
  id: PropTypes.string.isRequired
};

export default DetailPageWrapper;