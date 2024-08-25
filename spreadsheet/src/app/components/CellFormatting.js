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
  }, [selectedCell, pages, currentPage]); // Dependencies ensure updates on selection change

  const handleApplyFormatting = () => {
    if (selectedCell) {
      formatCell(selectedCell, 'alignment', alignment);
      formatCell(selectedCell, 'fontSize', fontSize);
      formatCell(selectedCell, 'backgroundColor', backgroundColor);
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-100">
      <h3 className="text-lg font-bold mb-2">Cell Formatting</h3>
      <div className="mb-4">
        <label className="block mb-2">Text Alignment:</label>
        <select
          value={alignment}
          onChange={(e) => setAlignment(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Font Size:</label>
        <input
          type="text"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          placeholder="Font Size (e.g., 14px)"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleApplyFormatting}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Apply Formatting
      </button>
    </div>
  );
};

export default CellFormatting;
