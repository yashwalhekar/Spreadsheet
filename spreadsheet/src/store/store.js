import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  pages: {}, // Store state per page
  undoStack: [],
  redoStack: [],
  searchQuery: '',
  currentPage: 0,
  totalPages: 1,
  itemsPerPage: 10,
  columnWidths: Array(20).fill(100), // Initialize with default width for each column

  updateCell: (id, value) => set((state) => {
    const currentPage = state.currentPage;
    const currentCells = state.pages[currentPage] || {};
    const newState = { ...currentCells, [id]: { ...currentCells[id], value } };

    return {
      pages: {
        ...state.pages,
        [currentPage]: newState,
      },
      undoStack: [...state.undoStack, currentCells],
    };
  }),

  formatCell: (id, key, value) => set((state) => {
    const currentPage = state.currentPage;
    const currentCells = state.pages[currentPage] || {};

    return {
      pages: {
        ...state.pages,
        [currentPage]: {
          ...currentCells,
          [id]: {
            ...currentCells[id],
            [key]: value,
          },
        },
      },
    };
  }),

  setSearchQuery: (query) => set(() => ({ searchQuery: query })),

  setCurrentPage: (page) => set((state) => ({
    currentPage: page,
  })),

  setTotalPages: (itemsPerPage, totalItems) => set(() => ({
    totalPages: Math.ceil(totalItems / itemsPerPage),
  })),

  setSelectedCell: (id) => set(() => ({ selectedCell: id })),

  setColumnWidth: (colIndex, width) => set((state) => ({
    columnWidths: state.columnWidths.map((w, i) => (i === colIndex ? width : w)),
  })),

  undo: () => set((state) => {
    if (state.undoStack.length === 0) return state;
    const lastState = state.undoStack.pop();
    const currentPage = state.currentPage;
    return {
      pages: {
        ...state.pages,
        [currentPage]: lastState,
      },
      redoStack: [...state.redoStack, state.pages[currentPage]],
    };
  }),

  redo: () => set((state) => {
    if (state.redoStack.length === 0) return state;
    const nextState = state.redoStack.pop();
    const currentPage = state.currentPage;
    return {
      pages: {
        ...state.pages,
        [currentPage]: nextState,
      },
      undoStack: [...state.undoStack, state.pages[currentPage]],
    };
  }),
}));

export default useSpreadsheetStore;
