import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setBooks } from '../books/bookSlice'

const HeaderStyled = styled.header`
  color: #243e36;
  display: grid;
  grid-gap: 25px;
  padding: 75px 0 100px 0;
  place-items: center;
`
const Title = styled.h1`
  font-size: 3rem;
  font-style: italic;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 610px;
`
const Input = styled.input`
  all: unset;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #e0eec6;
  box-shadow: 0 0 23px #c3c3c367;
  font-weight: 400;
  padding: 5px 10px;
  width: 500px;
`
const Button = styled.button`
  all: unset;
  background: #c2a83e;
  border-radius: 3px;
  box-shadow: 0 0 23px #c3c3c367;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 0;
  text-align: center;
  width: 80px;
`

const Header = () => {
  const dispatch = useDispatch()

  const [term, setTerm] = useState('')

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setBooks(term))
  }
  return (
    <HeaderStyled>
      <Title>Book Finder</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={term}
          onChange={handleChange}
          placeholder='Search a book...'
          autoFocus
        />
        <Button>Search</Button>
      </Form>
    </HeaderStyled>
  )
}

export default Header
