import { useEffect, useState } from "react";
import "./carouselStyles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Veggie() {

  const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=9`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes)
            console.log(data.recipes);
        }
    }

    return (
      <div>
          <div className='wrapper'>
              <h3>Our Vegitarian Picks</h3>
              <Splide options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "5rem",
              }}>
              {veggie.map((recipe) => {
                  return (
                      <SplideSlide key={recipe.id}>
                          <div className='card'>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title} />
                              <div className='gradient'/>
                          </div>
                      </SplideSlide>
                  )
              })}
              </Splide>
          </div>
      </div>
    )
}

export default Veggie