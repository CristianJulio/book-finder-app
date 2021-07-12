import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectBooks, selectStatus } from './bookSlice'
import Book from './Book'
import Spinner from '../spinner/Spinner'

const BookListStyled = styled.ul`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-bottom: 25px;
`

const Message = styled.p`
  text-align: center;
`

function BookList () {
  const status = useSelector(selectStatus)
  const books = useSelector(selectBooks)

  if (books.totalItems === 0) return <Message>No results...</Message>

  const areBooksReady = Object.keys(books).length !== 0

  return (
    <div className='wrapper'>
      {!areBooksReady && status !== 'loading' && <Message>Nothing to show...</Message>}
      {status === 'loading' && <Spinner />}
      {status === 'idle' && areBooksReady && (
        <BookListStyled>
          {books.items.map((b) => (
            <Book key={b.id} book={b} />
          ))}
        </BookListStyled>
      )}
    </div>
  )
}

export default BookList
