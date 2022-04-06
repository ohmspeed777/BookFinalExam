import { configureStore } from '@reduxjs/toolkit';
import booksSlices from './slices/booksSlices';



export const store = configureStore({
  reducer: {
    books: booksSlices,
  },
});
