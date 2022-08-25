import { useEffect, useState } from "react";
import "./carouselStyles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes)
            console.log(data.recipes);

        }

    }

  return (
    <div>
        <div className='wrapper'>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem",
            }}>
            {popular.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                        <div className='card'>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <div className='gradient'></div>
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