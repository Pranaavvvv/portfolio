import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        whileHover={{ 
          boxShadow: "0 0 20px rgba(145, 94, 255, 0.6)",
          transition: { duration: 0.3 }
        }}
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <motion.img
            src={icon}
            alt={title}
            initial={{ rotate: 0 }}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1,
              transition: { duration: 0.4 }
            }}
            className='w-16 h-16 object-contain mb-4'
          />
          <h3 className='text-white text-[20px] font-bold text-center capitalize'>
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [activeWord, setActiveWord] = useState(null);

  const interactiveTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10 
      }
    },
    hover: {
      scale: 1.1,
      color: "#915EFF",
      transition: { duration: 0.3 }
    }
  };

  const renderInteractiveText = (text) => {
    return text.split(/(\s+)/).map((part, index) => 
      /\s+/.test(part) ? part : (
        <motion.span
          key={index}
          variants={interactiveTextVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onHoverStart={() => setActiveWord(part)}
          onHoverEnd={() => setActiveWord(null)}
          className={`inline-block transition-all duration-300 
            ${activeWord === part 
              ? 'text-[#915EFF] scale-110 font-bold' 
              : 'text-secondary'}`}
        >
          {part}
        </motion.span>
      )
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <TypeAnimation
          sequence={[
            "About Me", 
            1000, 
            "My Journey", 
            1000,
            "Developer Profile",
            1000
          ]}
          wrapper="p"
          cursor={true}
          repeat={Number.POSITIVE_INFINITY}
          className={`${styles.sectionSubText} text-[#915EFF]`}
        />
        <h2 className={styles.sectionHeadText}>Who Am I?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wider'
      >
        {renderInteractiveText(`I'm a passionate developer transforming complex challenges into elegant solutions. 
        My technical toolkit spans Python, C/C++, ReactJS, and Flask, 
        crafting innovative projects like AI-powered platforms and predictive analytics tools. 
        A competitive programmer on Codeforces, I push boundaries with each line of code.`)}
      </motion.p>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='mt-20 flex flex-wrap justify-center gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");