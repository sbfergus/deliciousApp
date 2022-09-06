import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Keto from "../components/Keto";
import Paleo from "../components/Paleo";
import IngredientSearch from "../components/IngredientSearch";
import FoodTrivia from "../components/FoodTrivia";
import Category from "../components/Category";
import HomePageHero from "../components/HomePageHero";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <HomePageHero />
        <FoodTrivia />
        <Category />
        <IngredientSearch />
        <Popular />
        <Veggie />
        <Paleo />
        <Keto />
    </motion.div>
  )
}

export default Home