import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Stairs = () => {
  return <>
  
  { /* render & motion divs, each representing a step fo the stairs.
  
  Each div will have the same animation defined by the stairsAnimation object.
  The delay for each div is calculate sinamically based on it's reversed index,
  creating a staggered effect with decreasing delay for each subsequent step.
  
  */}
  
  </>
}

export default Stairs