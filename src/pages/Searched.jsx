import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import PlaceHolderPic from '../images/blur-photo.com_1662481341.jpg';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    
    const getSearchedRecipes = async (name) => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    }
    useEffect(() => {
        getSearchedRecipes(params.search);
    }, [params.type]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image? item.image : PlaceHolderPic} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
    })}
    </Grid>
  )
}

const Grid = styled.div`
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
    padding: 0rem;
    margin: 0;
    margin-top: 1rem;
  }
`;

export default Searched