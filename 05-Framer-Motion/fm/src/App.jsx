import { motion } from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.div
      className="box"
      drag
      whileDrag={{
        scale: 0.8
      }}
      dragConstraints={{
        left: 0,
        top: 0,
        right: 1000,
        bottom: 500
      }}
      dragDirectionLock = 'true'
      whileHover={{
        backgroundColor: "green"
      }}
      whileTap={{
        scale: 0.8
      }}
      >

      </motion.div>
    </div>
  );
}

export default App;
