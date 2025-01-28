import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Professional Technology Stack
      </h2>
      
      <div className="flex flex-row flex-wrap justify-center gap-10 relative">
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            className='w-28 h-28 relative group'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300
            }}
            onHoverStart={() => setHoveredTech(technology)}
            onHoverEnd={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-xs mt-2 text-gray-600 group-hover:text-blue-600 transition-colors">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white p-4 rounded-xl shadow-2xl z-50 
              max-w-md text-center"
          >
            <h3 className="font-bold text-lg">{hoveredTech.name}</h3>
            <p className="text-sm mt-2 opacity-80">
              Professional technology in my development toolkit
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Tech, "");