import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm 
              <span className="text-[#915eff] hover:font-bold ">
               &nbsp; &nbsp;Aakash 
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
             Fueling Innovation: Java and MERN Stack 
             <br className="sm:block hidden" />
             Mastery in Full Stack Development
            </p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  )
}

export default Hero