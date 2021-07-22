import React from 'react'
import Header from '../features/header/Header'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../app/store'

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
})

describe('<Header />', () => {
  test('It should render the title', () => {
    const title = screen.getByText(/book finder/i)
    expect(title).toBeInTheDocument()
  })
  test('It should render an input', () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
  test('It should render a button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  test('The input value should be updated when something is written to it', () => {
    const text = 'El túnel'
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    userEvent.type(input, text)
    expect(input).toHaveValue(text)
  })
})
