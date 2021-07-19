import React from 'react'
import styled from 'styled-components'
import { GrFormPrevious, GrFormNext, GrNext } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { selectBooks, selectStatus, setBooks } from '../books/bookSlice'
import { selectTerm } from '../header/headerSlice'
import { selectPage, selectPageToGo, setPage, setPageToGo } from './paginationSlice'

const PaginationStyled = styled.div`
  width: 600px;
  margin: 50px auto;
  box-shadow: 0 0 23px #C3C3C367;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 3px;
  padding: 5px 10px;
`
const Title = styled.p`
  color: #AAAAAA;
  font-weight: bold;
  // grid-column: 1 / -1;
  text-align: center;
`
const Pages = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const CurrentPage = styled.p`
  background: #243E36;
  color: #FFFFFF;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #243E36;
  font-weight: bold;
`
const Label = styled.label`
  letter-spacing: .4px;
`
const Input = styled.input`
  all: unset;
  border: 1px solid black;
  width: 20px;
  padding: 5px;
  border-radius: 3px;
  display: block;
  text-align: center;
  margin: 10px;
`
const ButtonForm = styled.button`
  all: unset;
  transition: transform 0.3s;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    transform: translateX(10px);
  }
`
const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;
`

function Pagination () {
  const dispatch = useDispatch()
  const { totalItems } = useSelector(selectBooks)
  const status = useSelector(selectStatus)
  const term = useSelector(selectTerm)
  const page = useSelector(selectPage)
  const pagetogo = useSelector(selectPageToGo)

  if (!totalItems || status === 'loading') return null
  console.log({ estado: !totalItems })

  let totalPages = Math.ceil(totalItems / 15) - 40
  if (totalPages < 1) totalPages = 1

  const handleChange = ({ target }) => {
    dispatch(setPageToGo(target.value))
  }
  const handleSubmit = e => {
    e.preventDefault()
    let value = Number(pagetogo)
    if (value > totalPages) value = totalPages
    if (value < 1) value = 1
    dispatch(setPage(value))
    dispatch(setBooks({ term, page: value }))
  }
  const handlePreviousClick = e => {
    if (page <= 1) return
    const value = page - 1
    dispatch(setPage(value))
    dispatch(setBooks({ term, page: value }))
  }
  const handleNextClick = () => {
    if (page >= totalPages) return
    const value = page + 1
    dispatch(setPage(value))
    dispatch(setBooks({ term, page: value }))
  }

  return (
    <PaginationStyled>
      <Pages>
        <Button onClick={handlePreviousClick}><GrFormPrevious /></Button>
        <CurrentPage>{page}</CurrentPage>
        <Button onClick={handleNextClick}><GrFormNext /></Button>
      </Pages>
      <Title>1 - {totalPages}</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor='pagetogo'>Go to page</Label>
        <Input type='text' id='pagetogo' value={pagetogo} onChange={handleChange} />
        <ButtonForm type='submit'><GrNext /></ButtonForm>
      </Form>
    </PaginationStyled>
  )
}

export default Pagination
