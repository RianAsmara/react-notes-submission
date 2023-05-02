import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import HTMLReactParser from 'html-react-parser';

function NoteDetail({ title, body, archived, createdAt }) {
  return (
    <div className="notes-item__body">
      <h3 className="notes-item__title">{title}</h3>
      <div className="subheader-wrapper">
        <span className="notes-item__createdAt">{showFormattedDate(createdAt)}</span>
        <p className="notes-item__status" style={{
          backgroundColor: archived ? "#F9D949" : "#3C486B",
          color: archived ? "#3C486B" : "#F0F0F0",
        }}
        >{archived ? 'Archived' : 'Published'}</p>
      </div>
      <p className="notes-item__content">{HTMLReactParser(body)}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NoteDetail;
