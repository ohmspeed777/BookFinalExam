import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';
import { wrappedThunk } from '../../helper/wrapthunk';

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  wrappedThunk(async () => {
    const res = await api.get('/books');
    return res.data.slice(0, 20);
  })
);

export const searchBook = createAsyncThunk(
  'books/searchBook',
  wrappedThunk(async (param) => {
    const res = await api.get('/books');
    const data = res.data.filter(
      (book) => book.isbn?.includes(param) || book.title?.includes(param)
    );
    return data.slice(0, 20);
  })
);

export const fetchOneBook = createAsyncThunk(
  'books/fetchOneBook',
  wrappedThunk(async (id) => {
    const res = await api.get('/books/' + id);
    return res.data;
  })
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    state: 'idle',
    value: null,
    error: null,
    status: null,
    single: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllBooks.pending]: (state) => {
      state.state = 'loading';
      state.error = null;
    },
    [fetchAllBooks.fulfilled]: (state, { payload }) => {
      state.state = 'idle';
      state.value = payload;
      state.status = 'ok';
    },
    [fetchAllBooks.rejected]: (state, { payload }) => {
      state.state = 'loading';
      state.error = payload;
      state.status = 'error';
    },
    [searchBook.pending]: (state) => {
      state.state = 'loading';
      state.error = null;
    },
    [searchBook.fulfilled]: (state, { payload }) => {
      state.state = 'idle';
      state.value = payload;
      state.status = 'ok';
    },
    [searchBook.rejected]: (state, { payload }) => {
      state.state = 'loading';
      state.error = payload;
      state.status = 'error';
    },
    [fetchOneBook.pending]: (state) => {
      state.state = 'loading';
      state.error = null;
    },
    [fetchOneBook.fulfilled]: (state, { payload }) => {
      state.state = 'idle';
      state.single = payload;
      state.status = 'ok';
    },
    [fetchOneBook.rejected]: (state, { payload }) => {
      state.state = 'loading';
      state.error = payload;
      state.status = 'error';
    },
  },
});

// export const { setEmail } = booksSlice.actions;
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
