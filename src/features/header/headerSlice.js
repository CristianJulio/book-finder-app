import { createSlice } from '@reduxjs/toolkit'

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    term: ''
  },
  reducers: {
    setTerm: (state, { payload }) => {
      state.term = payload
    }
  }
})

export const selectTerm = (state) => state.header.term

export const { setTerm } = headerSlice.actions
export default headerSlice.reducer
