import React from 'react'
import BookList from './features/books/BookList'
import Header from './features/header/Header'
import Pagination from './features/pagination/Pagination'

function App () {
  return (
    <div>
      <Header />
      <BookList />
      <Pagination />
    </div>
  )
}

export default App
