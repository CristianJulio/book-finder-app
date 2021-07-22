import React from 'react'
import { render, screen } from '@testing-library/react'
import BookList from '../features/books/BookList'
import { Provider } from 'react-redux'
import { store } from '../app/store'

describe('<BookList />', () => {
  test('It should render', () => {
    render(
      <Provider store={store}>
        <BookList />
      </Provider>
    )

    const message = screen.getByText(/nothing to show/i)
    expect(message).toBeInTheDocument()
  })
})
