import React from 'react'
import styled from 'styled-components'

const BookStyled = styled.li`
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #e0eec6;
  box-shadow: 0 0 23px #c3c3c367;
  display: flex;
`
const ImageContainer = styled.div`
  border-radius: 3px;
  height: 300px;
  width: 40%;
`
const Img = styled.img`
  border-radius: 3px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px 20px;
  width: 60%;
`
const BookTitle = styled.h3`
  font-size: 1rem;
`
const InfoTitle = styled.span`
  display: block;
  font-size: 11pt;
  font-weight: 600;
`
const InfoContent = styled.p`
  display: block;
  font-size: 11pt;
  font-weight: 400;
`
const Enlace = styled.a`
  background: #c2a83e;
  border-radius: 3px;
  color: #ffffff;
  display: block;
  font-weight: 400;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  width: 90px;
`

function Book ({ book }) {
  const imageLink = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
  const title = book.volumeInfo.title
  const publishedDate = book.volumeInfo.publishedDate
  const publisher = book.volumeInfo.publisher
  const author = book.volumeInfo.authors && book.volumeInfo.authors[0]
  const link = book.volumeInfo.infoLink
  const raiting = book.volumeInfo.averageRating

  return (
    <BookStyled>
      <ImageContainer>
        <Img src={imageLink} alt={title} />
      </ImageContainer>
      <ContentWrapper>
        <BookTitle>{title}</BookTitle>
        <InfoContent>
          <InfoTitle>Published Date:</InfoTitle> {publishedDate}
        </InfoContent>
        <InfoContent>
          <InfoTitle>Publisher:</InfoTitle> {publisher}
        </InfoContent>
        <InfoContent>
          <InfoTitle>Author:</InfoTitle> {author}
        </InfoContent>
        <InfoContent>
          <InfoTitle>Raiting:</InfoTitle> {raiting}
        </InfoContent>
        <Enlace href={link} rel='noreferrer' target='_blank'>
          See more
        </Enlace>
      </ContentWrapper>
    </BookStyled>
  )
}

export default Book
