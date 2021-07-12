export const fetchBooks = async (term) => {
  const modifiedTerm = term.replaceAll(' ', '%')
  const response = await window.fetch(`https://www.googleapis.com/books/v1/volumes?q=${modifiedTerm}&maxResults=15`)
  const books = await response.json()
  return books
}
