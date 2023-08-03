import Input from "../Input";
import styled from "styled-components";
import { useState } from 'react';
import { books } from './data';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  max-width: 25vw;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
    border-radius: 8px;
  }
`;

function Search() {
  const [researchedBooks, setResearchedBooks] = useState([]);

  console.log(researchedBooks);

  return (
    <SearchContainer>
      <Title>Already know where to start?</Title>
      <Subtitle>Find your book on our bookcase.</Subtitle>
      <Input 
        placeholder="Search your new reading"
        onBlur={ event => {
          const typedText = event.target.value;
          const searchResult = books.filter( book => {
            return book.name.includes(typedText);
          });
          setResearchedBooks(searchResult);

        }}
      />

      { researchedBooks.map( (book, index) => (
        <BookContainer key={ index }>
          <p>{ book.name }</p>
          <img src={ book.imgSrc } alt=""></img>
        </BookContainer>
      )) }

    </SearchContainer>
  );
}

export default Search;
