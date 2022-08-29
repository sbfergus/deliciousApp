import { useState } from 'react';
import {FaSearch, FaRegTimesCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function IngredientSearch() {

const [ingredients, setIngredients] = useState([]);
const [userInput, setUserInput] = useState('');

const submitHandler = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, userInput])
    setUserInput('');
}

const changeHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value)
}

const removeIngredient = (e) => {
    e.preventDefault();
    const name = e.target.parentNode.getAttribute('name');
    setIngredients([...ingredients].filter(item => item !== name))
}


  return (
    <Wrapper>
        <h3 style={{
            marginBottom: "2rem",
            fontSize: "2rem"
        }}>
        Search By Ingredients
        </h3>
        <FormStyle id="ingredientForm" onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input 
                id="ingredientInput" 
                type="text" 
                placeholder='Whats in your fridge?'
                value={userInput} 
                onChange={changeHandler}/>
            </div>
        </FormStyle>
        <IngredientList>
            {ingredients.map((ingredient) => {
                return (
                    <h2 key={ingredient} name={ingredient}>
                        <FaRegTimesCircle
                        size={16} 
                        style={{position: "absolute", top: '5px', right: '5px', cursor: 'pointer'}}
                        onClick={removeIngredient} />
                        {ingredient}
                    </h2>
                )
            })}
        </IngredientList>
        <IngredientsLink to={`/recipesByIngredients/${ingredients}`}>Find Recipe</IngredientsLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

const IngredientList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    h2 {
        color: black;
        padding: 1rem 2rem;
        margin: 1rem;
        background: orange;
        border-radius: 15px;
        position: relative;
    }
`;

const FormStyle = styled.form`
    div {
        width: 80%;
        position: relative;
        margin: auto;
        margin-top: 2rem;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

const IngredientsLink = styled(Link)`
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    text-decoration: none;
    display: block;
    text-align: center;
    width: max-content;
    margin: 0 auto;
`

export default IngredientSearch