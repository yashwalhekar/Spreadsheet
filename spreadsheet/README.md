# Spreadsheet Application

## Overview

This is a dynamic spreadsheet application developed with Next.js, React, and Tailwind CSS. It mimics the some functionality of a traditional spreadsheet with features like cell editing, data storage, formatting, validation, search/filter, pagination, and undo/redo. The application utilizes Zustand for state management to handle various aspects of spreadsheet functionality.

## Features

### 1. Cell Editing
- **Dynamic Content**: Edit and modify cell values directly.


### 2. Cell Formatting
- **Text Alignment**: Set text alignment (left, center, right) for cells.
- **Font Size**: Customize the font size for better readability.
- **Background Color**: Change the background color of cells for visual distinction.

### 3. Search and Filtering
- **Search Query**: Search for specific content within cells.
- **Dynamic Filtering**: Filter cells based on the search query to find relevant data quickly.

some Work is remaining in this section

### 4. Pagination
- **Multiple Pages**: Data is divided across multiple pages, with navigation buttons to switch between pages.
- **Page Persistence**: The content of each page is preserved when navigating away and returning, ensuring data remains intact.

### 5. Undo and Redo
- **State Management**: Undo and redo changes to cell data and formatting.
- **Undo/Redo Stack**: Maintain a history of changes to revert or reapply actions as needed.

### 6. Cell Selection and Interaction
- **Cell Selection**: Select cells to apply formatting and interact with them.
- **Interactive Formatting**: Automatically apply selected formatting options to the chosen cell.

### 7. Responsive Design
- **Adaptable Layout**: Uses Tailwind CSS to ensure the application is responsive and works well on various devices and screen sizes.

### 8. State Management
- **Zustand**: Efficiently manages application state, including cell data, search queries, and pagination.

### 9. User Interface
- **Bootstrap and Tailwind CSS**: Clean and intuitive UI with components styled using Bootstrap and Tailwind CSS.
- **Component Structure**: Modular design with separate components for different functionalities (e.g., cell input, formatting, pagination).

### 10. Customizable Components
- **Flexible Design**: Components like `CellFormatting` allow users to dynamically adjust settings such as alignment, font size, and background color.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/spreadsheet-application.git
