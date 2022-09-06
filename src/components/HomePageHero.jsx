import Typical from 'react-typical';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import BackgroundImage from "../images/pexels-pixabay-326268.jpg"

function HomePageHero() {

  const [randomRecipe, setRandomRecipe] = useState('');

  useEffect(() => {
    getRandomRecipe()
  }, []);

  const getRandomRecipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
    const data = await api.json();
    setRandomRecipe(data.recipes[0]);
  }

  return (
    <Hero>
        <h1>
            <Typical
                loop={1}
                steps={[
                    'Recipes for any occasion',
                    1000,
                ]} 
            />
        </h1>
        <Link to={`/recipe/${randomRecipe.id}`}>
            <HeroButton>
                Suprise Me
            </HeroButton>
        </Link>
    </Hero>
  )
}

const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  height: 100vh;
  display: relative;
  h1 {
    font-family: 'Cormorant Garamond', serif;
    color: white;
    font-size: 10rem;
    position: absolute;
    width: 40%;
    bottom: 15%;
    left: 15%;
    line-height: 105%;
    @media (max-width: 1500px) {
      font-size: 7rem;
      bottom: 22%;
    }
    @media (max-width: 1000px) {
      font-size: 5rem;
      bottom: 28%;
    }
    @media (max-width: 750px) {
      top: 25%;
      width: 60%;
    }
    @media (max-width: 485px) {
      font-size: 4rem;
    }
  }
`;

const HeroButton = styled.button`
  color: white;
  position: absolute;
  bottom: 40%;
  right: 20%;
  font-size: 2.5rem;
  padding: 2rem 3rem;
  background: #5AC0B5;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.57);
  @media (max-width: 1200px) {
    font-size: 1.5rem
  }
  @media (max-width: 1000px) {
    font-size: 1.25rem;
    padding: 1.5rem 2rem;
  }
  @media (max-width: 750px) {
    bottom: 20%;
    left: 15%;
    width: 200px;
  }
  @media (max-width: 400px) {
    bottom: 20%;
    padding: 1rem 1.5rem;
  }
`;



export default HomePageHero