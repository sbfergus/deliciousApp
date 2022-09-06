import { useState } from 'react';
import {FaSearch, FaRegTimesCircle, FaPlus} from 'react-icons/fa';
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
            
        }}>
        Search By Ingredients
        </h3>
        <FormStyle id="ingredientForm" onSubmit={submitHandler}>
            <div>
                <FaSearch className="mag-glass"/>
                <input 
                id="ingredientInput" 
                type="text" 
                placeholder='Whats in your fridge?'
                value={userInput} 
                onChange={changeHandler}/>
                <button type="submit">
                    <FaPlus />
                </button>
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
    margin: 2rem 0rem;
    background: #E5E4E5;
    padding: 2rem 3rem 4rem 3rem;
    @media (max-width: 400px) {
        padding: 2rem 1rem;
    }
    h3 {
        margin-bottom: 2rem;
        font-size: 2rem;
        @media (max-width: 400px) {
            font-size: 1.6rem;
        }
        @media (max-width: 360px) {
            font-size: 1.25rem;
        }
    }
`;

const IngredientList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    @media (max-width: 400px) {
        margin-top: .5rem;
    }
    h2 {
        color: black;
        padding: 1rem 2rem;
        margin: 1rem;
        background: orange;
        border-radius: 15px;
        position: relative;
        @media (max-width: 400px) {
            font-size: .75rem;
            padding: 1rem 1.5rem;
            margin: .5rem;
        }
    }
`;

const FormStyle = styled.form`
    div {
        width: 100%;
        position: relative;
        margin: auto;
        margin-top: 2rem;
        @media (max-width: 950px) {
            
            margin: 0;
        }
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
        @media (max-width: 400px) {
            font-size: 1rem;
            ::placeholder {
                font-size: 1rem;
            }
        }
        @media (max-width: 350px) {
            ::placeholder {
                font-size: .8rem;
            }
        }
    }
    .mag-glass {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

    button {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(0%, -50%);
        color: white;
        height: 100%;
        padding: 1rem;
        background: none;
        border:none;
        cursor: pointer;
    }

    button svg {
        font-size: 1.25rem;
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
    max-width: 250px;
    margin: 0 auto;
    @media (max-width: 400px) {
        font-size: 1rem;
        margin-top: 1.5rem;
    }
`

export default IngredientSearch

