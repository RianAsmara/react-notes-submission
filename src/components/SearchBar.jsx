import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan judul"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func
}

export default SearchBar;