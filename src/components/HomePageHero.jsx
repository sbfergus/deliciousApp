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
                    'Recipes for any occasion'
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
    top:25%;
    left: 15%;
    line-height: 105%;
    @media (max-width: 1500px) {
         font-size: 7rem;
         top: 22%;
         width: 60%;
       }
    @media (max-width: 687px) {
      font-size: 5rem;
    }
    @media (max-width: 460px) {
      font-size: 3.4rem;
      top: 30%;
    }
    @media (max-width: 400px) {
      left: 8%;
    }  
  }
`;

const HeroButton = styled.button`
  color: white;
  position: absolute;
  top:50%;
  right: 20%;
  font-size: 2.5rem;
  padding: 2rem 3rem;
  background: #5AC0B5;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.57);
  @media (max-width: 1500px) {
    left: 15%;
    top:80%;
    font-size: 2rem;
    width: 30%;
  }
  @media (max-width: 950px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 687px) {
    width: 50%;
    top: 75%;
  }
  @media (max-width: 400px) {
    left: 8%;
    font-size: 1.25rem;
    width: 60%;
  } 
`;



export default HomePageHero

