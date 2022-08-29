import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Keto from "../components/Keto";
import IngredientSearch from "../components/IngredientSearch";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <Popular />
        <Veggie />
        <Keto />
        <IngredientSearch />
    </motion.div>
  )
}

export default Home