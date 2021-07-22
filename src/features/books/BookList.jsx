import React from 'react'
import styled from 'styled-components'
import Book from './Book'
import Spinner from '../spinner/Spinner'
import { useSelector } from 'react-redux'
import { selectBooks, selectStatus } from './bookSlice'

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
  const { totalItems } = books
  const areBooksReady = Object.keys(books).length !== 0

  if (!areBooksReady && status === 'idle') return <Message>Nothing to show...</Message>
  if (totalItems === 0) return <Message>No results...</Message>

  return (
    <div className='wrapper'>
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
