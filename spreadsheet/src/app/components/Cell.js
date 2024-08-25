'use client'

import React from 'react';
import useSpreadsheetStore from '@/store/store';

const Cell = ({ id }) => {
  const { pages, currentPage, updateCell, setSelectedCell, columnWidths } = useSpreadsheetStore();
  
  const currentCells = pages[currentPage] || {};
  const cell = currentCells[id] || {};

  const handleInputChange = (e) => {
    const value = e.target.value;
    updateCell(id, value);
  };

  const handleCellClick = () => {
    setSelectedCell(id); // Set the selected cell in the store
  };

  const columnIndex = parseInt(id.split('-')[1], 10);

  return (
    <input
      type="text"
      value={cell.value || ''}
      onChange={handleInputChange}
      onClick={handleCellClick} // Update on click
      className="border p-2"
      style={{
        borderColor: cell.selected ? 'blue' : 'gray',
        backgroundColor: cell.backgroundColor || '#ffffff',
        textAlign: cell.alignment || 'left',
        fontSize: cell.fontSize || '14px',
        width: columnWidths[columnIndex] || '100px'
      }}
    />
  );
};

export default Cell;
