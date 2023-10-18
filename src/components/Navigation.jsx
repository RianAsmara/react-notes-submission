import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext';
import { FiHome } from 'react-icons/fi';

function Navigation({ countPublished, countArchive }) {
  return (
    <LocaleConsumer>
      {
        ({ locale, toggleLocale }) => {
          return (
            <nav className="navigation">
            <ul>
              <li className='notes-link'>
                <Link to="/"><FiHome /></Link>
              </li>
              <li className='notes-link'>
                  <Link to="/add-note">{ locale === 'id' ? 'Tambah' : 'Add' }</Link>
              </li>
              <li className='notes-link'>
                <Link to="/published">{locale === 'id' ? 'Rilis' : 'Published'} <sup className='badge'>{countPublished ? countPublished : 0}</sup></Link>
              </li>
              <li className='notes-link'>
                <Link to="/archived">{locale === 'id' ? 'Arsip' : 'Archived'} <sup className='badge'>{countArchive ? countArchive : 0}</sup> </Link>
              </li>
              <li><button onClick={toggleLocale}>{locale === 'id' ? '🇬🇧' : '🇮🇩'}</button></li>
            </ul>
          </nav>
          )
        }
         }
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  countPublished: PropTypes.number,
  countArchive: PropTypes.number,
};
export default Navigation;