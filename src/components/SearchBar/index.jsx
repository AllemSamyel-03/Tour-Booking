import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchInput, updateSearchInput }) => (
  <div className="search-bar">
    <FiSearch />
    <input
      type="search"
      value={searchInput}
      onChange={(event) => updateSearchInput(event.target.value)}
      placeholder="Search by parent or child name"
    />
  </div>
);

export default SearchBar;
