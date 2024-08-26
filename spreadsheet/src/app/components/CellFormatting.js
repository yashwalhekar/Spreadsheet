'use client'

import React, { useState, useEffect } from 'react';
import useSpreadsheetStore from '@/store/store';

const CellFormatting = () => {
  const { formatCell, pages, currentPage, selectedCell } = useSpreadsheetStore();
  const [alignment, setAlignment] = useState('left');
  const [fontSize, setFontSize] = useState('14px');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    const currentCells = pages[currentPage] || {};
    const cell = currentCells[selectedCell] || {};

    // Update formatting states with the selected cell's data
    setAlignment(cell.alignment || 'left');
    setFontSize(cell.fontSize || '14px');
    setBackgroundColor(cell.backgroundColor || '#ffffff');
  }, [selectedCell, pages, currentPage]);

  const handleApplyFormatting = () => {
    if (selectedCell) {
      formatCell(selectedCell, 'alignment', alignment);
      formatCell(selectedCell, 'fontSize', fontSize);
      formatCell(selectedCell, 'backgroundColor', backgroundColor);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-2 bg-green-700 border-b">
      <h3 className="text-lg font-bold text-white">Formatting Toolbar</h3>

      <div className="flex items-center space-x-2">
        <label className=' text-white'>Text Alignment:</label>
        <select
          value={alignment}
          onChange={(e) => setAlignment(e.target.value)}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label className=' text-white'>Font Size:</label>
        <input
          type="text"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          placeholder="Font Size"
          className="border border-gray-300 p-1 rounded w-20"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label className=' text-white'>Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="border border-gray-300 p-1 rounded"
        />
      </div>

      <button
        onClick={handleApplyFormatting}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Apply
      </button>
    </div>
  );
};

export default CellFormatting;
