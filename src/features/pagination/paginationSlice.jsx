import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 1,
    pagetogo: 1
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setPageToGo: (state, { payload }) => {
      state.pagetogo = payload
    }
  }
})

export const selectPage = (state) => state.pagination.page
export const selectPageToGo = (state) => state.pagination.pagetogo

export const { setPage, setPageToGo } = paginationSlice.actions
export default paginationSlice.reducer
