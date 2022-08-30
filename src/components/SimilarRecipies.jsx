import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './similarStyles.css';
import { Link, useParams } from 'react-router-dom';

function SimilarRecipies() {

    const [similar, setSimilar] = useState([]);
    let params = useParams();
   
    const getSimilar = async (name) => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/${name}/similar?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        setSimilar(recipes);
    }

    useEffect(() => {
        getSimilar(params.name);
    }, [])

    return (
        <div>
            <div className='similar-wrapper'>
                <h3>Similar Recipies</h3>
                <Splide options={{
                    perPage: 3,
                    breakpoints: {
                      850: {
                          perPage: 2,
                      },
                      530: {
                          perPage: 1,
                      },
                    },
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                {similar.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <div className='similar'>
                                <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}}>
                                    <p className="similar-title">{recipe.title}</p>
                                </Link>
                            </div>
                        </SplideSlide>
                    )
                })}
                </Splide>
            </div>
        </div>
      )
}

export default SimilarRecipies




