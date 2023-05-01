import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ countPublished, countArchive }) {
  return (
    <nav className="navigation">
      <h2>Catatan Belajarku</h2>
      <ul>
        <li className='notes-link'>
          <Link to="/">Home</Link>
        </li>
        <li className='notes-link'>
          <Link to="/add-note">Add Note</Link>
        </li>
        <li className='notes-link'>
          <Link to="/published">Published <sup className='badge'>{countPublished ? countPublished : 0}</sup></Link>
        </li>
        <li className='notes-link'>
          <Link to="/archived">Archived <sup className='badge'>{countArchive ? countArchive : 0}</sup> </Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  countPublished: PropTypes.number,
  countArchive: PropTypes.number,
};
export default Navigation;