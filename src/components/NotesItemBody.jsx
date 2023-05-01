import HTMLReactParser from "html-react-parser"
import { showFormattedDate } from "../utils"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function NotesItemBody({ id, title, archived, body, createdAt }) {
  return (
    <>
      <div className="notes-item__body">
        <h3 className="notes-item__title">
          <Link to={`detail-note/${id}`}>{title}</Link>
        </h3>
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
    </>
  )
}

NotesItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NotesItemBody