import P from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type here your search"
    />
  );
};

SearchInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
