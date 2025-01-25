import React from 'react';
import { useDispatch } from 'react-redux';
import { searchRecords } from '../redux/actions/recordActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(searchRecords(event.target.value)); // Dispatch search action
  };

  return (
    <div className="my-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search by ID, Name, or Email"
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default SearchBar;
