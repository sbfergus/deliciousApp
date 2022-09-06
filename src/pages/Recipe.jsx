import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SimilarRecipies from '../components/SimilarRecipies';
import PlaceHolderPic from '../images/blur-photo.com_1662481341.jpg';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();
  
  const getRecipeDetails = async (name) => {
      const data = await fetch(`
      https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const recipeInfo = await data.json();
      setDetails(recipeInfo);
  }
  
  useEffect(() => {
    getRecipeDetails(params.name);
  }, [params.name]);

  return (
    <>
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <RecipeImg src={details.image? details.image : PlaceHolderPic} alt="" />
      </div>
      <Info>
        <ButtonWapper>
          <Button 
            className={activeTab==='instructions'? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}>
              Instructions
          </Button>
          <Button 
            className={activeTab==='ingredients'? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}>
              Ingredients
          </Button>
        </ButtonWapper>
        
        {activeTab === 'instructions' && 
        (<div style={{marginTop: "2rem"}}>
          <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>)
        }
        {activeTab === 'ingredients' && 
        (<div >
          <ul>
          {details.extendedIngredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
              )
            })}
          </ul>
        </div>)
        }
        
      </Info>
    </DetailWrapper>
    <SimilarRecipies /> 
    </>
  )
}

const RecipeImg = styled.img`
@media (max-width: 1170px) {
  width: 100%;
  margin-bottom: 2rem; 
  };
`;

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  list-style-position: inside;
  div h2 {
    font-size: 2rem;
    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    
  }
  ul {
    margin-top: 2rem;
    list-style-position: inside;
  }
  @media (max-width: 1170px) {
    flex-direction: column;
  };
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
  width: 100%;
  @media (max-width: 1170px) {
    margin-left: 0rem;
  };
`;

const ButtonWapper = styled.div`
  display: flex;
  justify-content: left;
`;

export default Recipe
