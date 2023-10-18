import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext';

function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <input
            className="search-bar"
            type="text"
            placeholder={locale === "id" ? "Cari berdasarkan judul" : "Search By Title"}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)} />
          )
        }
     }
    </LocaleConsumer>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func
}

export default SearchBar;