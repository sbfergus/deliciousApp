import styled from 'styled-components';
import { useEffect, useState } from "react";
import {FaBrain} from 'react-icons/fa';

function FoodTrivia() {
  const [trivia, setTrivia] = useState('');

  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {
    const api = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json();
    setTrivia(data.text)
  }

  return (
    <TriviaContainer>
      <FaBrain />
      <h3>
        {trivia}
      </h3>
    </TriviaContainer>
  )
}

const TriviaContainer = styled.div`
  width: 100%;
  background: #E5E4E5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 10rem;
  @media (max-width: 700px) {
    padding: 4rem 2rem;
  }
  h3 {
    text-align: center;
    font-size: 4rem;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
    
  }
    svg {
      margin-bottom: 1rem;
      font-size: 5rem;
      @media (max-width: 1000px) {
        font-size: 3rem;
      }
  }
`;

export default FoodTrivia