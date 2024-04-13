import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className='search-box'>
      <input
        type="text"
        placeholder="Search Products"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
