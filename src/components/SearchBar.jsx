import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
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

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar;