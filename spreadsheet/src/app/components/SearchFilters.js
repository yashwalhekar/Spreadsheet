'use client'

import useSpreadsheetStore from '@/store/store';
import React from 'react';

const SearchFilter = () => {
  const { searchQuery, setSearchQuery } = useSpreadsheetStore();

  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded w-full max-w-xs"
      />
    </div>
  );
};

export default SearchFilter;
