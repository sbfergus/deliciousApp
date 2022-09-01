import { useEffect, useState } from "react";
import "./carouselStyles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            setPopular(data.recipes)
    }

  return (
    <div>
        <div className='wrapper'>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                breakpoints: {
                    1150: {
                        perPage: 3,
                    },
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
            {popular.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                        <div className='card'>
                            <Link to={`/recipe/${recipe.id}`}>
                                <p className="title">{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <div className='gradient'></div>
                            </Link>
                        </div>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    </div>
  )
};

export default Popular