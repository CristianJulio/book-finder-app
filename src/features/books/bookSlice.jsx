import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBooks } from './bookApi'

export const setBooks = createAsyncThunk(
  'books/fetchBooks',
  async (term) => {
    const books = await fetchBooks(term)
    return books
  }
)

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setBooks.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(setBooks.fulfilled, (state, { payload }) => {
      state.status = 'idle'
      state.books = payload
    })
  }
})

export const selectBooks = (state) => state.book.books
export const selectStatus = (state) => state.book.status

export default bookSlice.reducer
