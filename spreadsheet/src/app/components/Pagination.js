'use client'

import useSpreadsheetStore from '@/store/store';
import React, { useEffect } from 'react';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages, setTotalPages } = useSpreadsheetStore();

  useEffect(() => {
    setTotalPages(10, 100);
  }, [setTotalPages]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 0}
        className="px-4 py-2 bg-gray-200 text-gray-600 border rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-gray-700">Page {currentPage + 1} of {totalPages}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages - 1}
        className="px-4 py-2 bg-gray-200 text-gray-600 border rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
