import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function RecipesByIngredients() {
  let params = useParams();
  //console.log(params.ingredients)
  useEffect(() => {
    console.log(params.ingredients);
  }, []);
  return (
    <div>RecipesByIngredients<h1>{params.ingredients}</h1></div>
  )
}

export default RecipesByIngredients