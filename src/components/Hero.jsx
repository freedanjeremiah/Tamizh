import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0d685c]" />
          <div className="w-1 sm:h-80 h-40 green-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>தமிழ |&nbsp;
            <span className="text-1">Tamizh</span>
            <span className="text-2">Tamizh</span>
          </h1>
          <p className={`${styles.heroSubText} invisible md:visible mt-2 text-white-100 inner-headings `}>We
          <section className="ch-word ">
            <span className="word1 text-red-500"><div>Think </div></span>
            <span className="word2 text-blue-500"><div>Adapt</div></span>
            <span className="word3 text-yellow-500"><div>Evolve</div></span>
          </section>
          </p>
          <p className={`${styles.heroSubText} visible md:invisible mt-2 text-white-100 `}>We
          <span className="word1 text-red-400"> Think</span>
            <span className="word2 text-blue-400">Adapt</span>
            <span className="word3 text-yellow-400">Evolve</span>
          </p>

        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y:[0,24,0]}} transition={{duration: 1.5, repeat:Infinity, repeatType:'loop'}} className="w-3 h-3 rounded-full bg-white mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
  
}


export default Hero