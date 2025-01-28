import React from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

function Hero() {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <TypeAnimation
              sequence={[
                "Hi, I'm Pranav", 
                1000,
                "A Software Engineer", 
                1000,
                "A ML Developer", 
                1000,
                "A Tech Enthusiast", 
                1000,
                () => {
                  // Optional callback after sequence completes
                  console.log("Typewriter sequence finished");
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Number.POSITIVE_INFINITY}
              style={{ display: 'inline-block' }}
              speed={1}
              deletionSpeed={5}
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Crafting Digital Experiences <br className="sm:block hidden" />
            One Line of Code at a Time
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero