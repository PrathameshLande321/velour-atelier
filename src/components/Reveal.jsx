import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.4,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;