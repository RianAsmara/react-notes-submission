import { Link } from 'react-router-dom';

function Navigation() {
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
          <Link to="/published-note">Published <sup className='badge'>4</sup></Link>
        </li>
        <li className='notes-link'>
          <Link to="/archived-note">Archived <sup className='badge'>1</sup> </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;