import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from  'framer-motion';
import {Link, useParams} from 'react-router-dom';
import PlaceHolderPic from '../images/blur-photo.com_1662481341.jpg';

function Cuisine() {
  
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  }
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image ? item.image : PlaceHolderPic} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
    })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  margin: 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  @media (max-width: 400px) {
    width: 100%;
    grid-gap: 1rem;
  }
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    margin: 0;
    margin-top: 1rem;
    @media (max-width: 400px) {
      padding: 0rem;
      margin-top: .5rem;
    }
  }
`;

export default Cuisine