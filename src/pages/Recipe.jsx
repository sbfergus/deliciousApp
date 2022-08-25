import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [details, setDetails] = useState([]);
  let params = useParams();
  console.log(details)
  const getRecipeDetails = async (name) => {
      const data = await fetch(`
      https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`);
      const recipeInfo = await data.json();
      //console.log(recipes.results);
      setDetails(recipeInfo);
  }
  useEffect(() => {
    getRecipeDetails(params.name);
  }, [params.name]);

  return (
    <div>Recipe</div>
  )
}

export default Recipe