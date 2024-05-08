import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className='search-box'>
        <input className='hidden md:block p-2 rounded outline-none' type='search' placeholder='Search Products...' value={value}
        onChange={onChange} />
    </div>
  );
}

export default SearchBox;