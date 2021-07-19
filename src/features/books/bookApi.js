export const fetchBooks = async (term, page = 1) => {
  console.log({ term, page, name: 'Api' })
  const startIdenx = (page * 15) - 15
  const modifiedTerm = term.replaceAll(' ', '%')
  const response = await window.fetch(`https://www.googleapis.com/books/v1/volumes?q=${modifiedTerm}&maxResults=15&startIndex=${startIdenx}`)
  const books = await response.json()
  return books
}
