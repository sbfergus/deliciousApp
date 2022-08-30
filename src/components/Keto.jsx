import { useEffect, useState } from "react";
import "./carouselStyles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Keto() {

    const [keto, setKeto] = useState([]);

    useEffect(() => {
        getKeto();
    }, [])

    const getKeto = async () => {
        const check = localStorage.getItem('keto');

        if (check) {
            setKeto(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=ketogenic&number=9`);
            const data = await api.json();
            localStorage.setItem('keto', JSON.stringify(data.recipes));
            setKeto(data.recipes)
            console.log(data.recipes);

        }

    }

  return (
    <div>
        <div className='wrapper'>
            <h3>Our Ketogenic Picks</h3>
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
            {keto.map((recipe) => {
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

export default Keto