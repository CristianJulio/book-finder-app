import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../features/books/bookSlice'
import headerReducer from '../features/header/headerSlice'
import paginationReducer from '../features/pagination/paginationSlice'

export const store = configureStore({
  reducer: {
    book: bookReducer,
    header: headerReducer,
    pagination: paginationReducer
  }
})
