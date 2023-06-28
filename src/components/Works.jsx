import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { myGithub, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  website_image,
  website_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
            </div> */}
            <div className="px-1"></div>
            <div
              onClick={() => window.open(website_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-6">
        <p className={`${styles.sectionSubText} `}>Our Current</p>
        <h2 className={`${styles.sectionHeadText}`}>Project!</h2>
      </motion.div>

      <div className='px-6 w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          Users can explore virtual environments, interact with virtual objects, and merge digital content with the real world,
           opening up new possibilities for entertainment, education, training, and various industries.
          <br/><br/>
          Extended Reality (XR) project combine virtual reality (VR),
           augmented reality (AR), and mixed reality (MR) technologies to create immersive and interactive experiences.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.p
          variants={textVariant()}
          className="mt-24 text-secondary text-[21px] max-w-3xl leading-[30px] text-center"
        >
          Please standby cause we are currently cooking the product
        </motion.p>

        {/* <div
          className="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4"
          onClick={() => window.open(myGithub, "_blank")}
        >
          <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
            <img
              src={github}
              alt="source code"
              className="w-[40px] h-[40px] object-contain"
            />

            <p className="text-[21px]">GitHub</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");