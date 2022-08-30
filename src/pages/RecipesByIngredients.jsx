import { useEffect, useState } from 'react';
import {motion} from  'framer-motion';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

function RecipesByIngredients() {

  const [recipesByIngredients, setRecipesByIngredients] = useState([]);

  let params = useParams();
  
  const getRecipesByIngredients = async (ingredients) => {
    const data = await fetch(`
    https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}&number=9`);
    const recipes = await data.json();
    console.log(recipes);
    setRecipesByIngredients(recipes)
  }

  useEffect(() => {
    getRecipesByIngredients(params.ingredients);
  }, [params.ingredients]);

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {recipesByIngredients.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
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
  }
`;

export default RecipesByIngredients