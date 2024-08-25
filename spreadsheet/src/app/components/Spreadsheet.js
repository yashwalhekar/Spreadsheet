'use client'

import React from 'react';
import useSpreadsheetStore from '@/store/store';
import Cell from './Cell';
import Pagination from './Pagination';
import SearchFilter from './SearchFilters';
import CellFormatting from './CellFormatting';

const Spreadsheet = () => {
  const { pages, currentPage, searchQuery, setSelectedCell, columnWidths, setColumnWidth } = useSpreadsheetStore();
  const rows = 50;
  const cols = 20;
  const currentCells = pages[currentPage] || {};

  const handleCellSelect = (id) => {
    setSelectedCell(id);
  };

  const handleColumnResize = (e, colIndex) => {
    e.preventDefault(); // Prevent default drag behavior

    const startX = e.clientX;
    const initialWidth = e.target.parentElement.offsetWidth;

    const mouseMoveHandler = (event) => {
      const newWidth = initialWidth + (event.clientX - startX);
      if (newWidth > 20) { // Minimum width to prevent collapsing
        setColumnWidth(colIndex, newWidth); // Save width to the store
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const renderCells = () => {
    const grid = [];
    for (let row = 0; row < rows; row++) {
      const colsArray = [];
      for (let col = 0; col < cols; col++) {
        const cellId = `${row}-${col}`;
        colsArray.push(
          <Cell key={cellId} id={cellId} onSelect={handleCellSelect} />
        );
      }
      grid.push(
        <div key={row} className="flex">
          {colsArray}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="p-4 space-y-4">
      <SearchFilter />
      <CellFormatting />
      <div className="overflow-auto">
        {/* Column Headers */}
        <div className="flex">
          {Array.from({ length: cols }).map((_, col) => (
            <div
              key={col}
              className="relative flex-shrink-0 border-b border-gray-300 p-2 text-center font-bold bg-gray-200"
              style={{ width: columnWidths[col] || '100px' }}
            >
              <div>Column {col + 1}</div>
              <div
                className="absolute top-0 right-0 h-full w-2 bg-gray-300 cursor-col-resize"
                onMouseDown={(e) => handleColumnResize(e, col)}
              />
            </div>
          ))}
        </div>
        {/* Cells */}
        <div className="grid grid-cols-20 gap-0 border border-gray-300 mt-8">
          {renderCells()}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Spreadsheet;
