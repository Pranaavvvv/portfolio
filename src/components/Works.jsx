import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card 
        transition-all duration-300 hover:shadow-2xl group'
      >
        {/* Project Image with Overlay */}
        <div 
          className='relative w-full h-[230px] overflow-hidden rounded-2xl'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            src={image}
            alt={`${name} project visualization`}
            className='w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110 group-hover:rotate-3'
            loading="lazy"
          />
          
          {/* Quick Links Overlay */}
          <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 flex justify-center items-center space-x-4'>
            {source_code_link && (
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className='bg-white/20 backdrop-blur-sm p-3 rounded-full cursor-pointer'
              >
                <img 
                  src={github} 
                  alt='GitHub repository' 
                  className='w-6 h-6 object-contain'
                />
              </motion.div>
            )}
            {demo_link && (
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demo_link, "_blank");
                }}
                className='bg-white/20 backdrop-blur-sm p-3 rounded-full cursor-pointer'
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className='mt-5 space-y-2'>
          <h3 className='text-white font-bold text-[24px] transition-colors 
          group-hover:text-blue-300'>
            {name}
          </h3>
          <p className='text-secondary text-[14px] line-clamp-3'>
            {description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} px-2 py-1 rounded-full 
              transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Expanded Project Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='absolute inset-0 bg-black/90 p-6 rounded-2xl 
              flex flex-col justify-center items-center text-center z-50'
            >
              <h4 className='text-white text-xl font-bold mb-4'>{name}</h4>
              <p className='text-gray-300 mb-4'>{description}</p>
              
              <div className='flex space-x-4'>
                {source_code_link && (
                  <motion.a
                    href={source_code_link}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className='bg-blue-600 text-white px-4 py-2 rounded-full 
                    flex items-center space-x-2'
                  >
                    <img 
                      src={github} 
                      alt='GitHub' 
                      className='w-5 h-5'
                    />
                    <span>Source Code</span>
                  </motion.a>
                )}
                
                {demo_link && (
                  <motion.a
                    href={demo_link}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className='bg-green-600 text-white px-4 py-2 rounded-full 
                    flex items-center space-x-2'
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
              
              <button
                onClick={() => setIsExpanded(false)}
                className='absolute top-4 right-4 text-white hover:text-red-500'
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className={`${styles.sectionSubText} text-center`}>Innovative Solutions</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Project Showcase</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='mt-3 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]'
      >
        A curated collection of projects that push technological boundaries, 
        demonstrating problem-solving skills and innovative thinking across diverse domains.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${project.name}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
