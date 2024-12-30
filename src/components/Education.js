import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
    type="Ph.D. in Physics | Specialization in Atomic, Molecular and Condensed Matter Physics"
    time="2018-2023"
    place="Uppsala University, Sweden"
    info={
      <>
        Thesis: <a href="http://uu.diva-portal.org/smash/get/diva2:1736122/FULLTEXT01.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GENOME2QUNOME: Interfacing Molecules with Nanomaterials</a>
      </>
    }
  />

          <Details
            type="Master of Technology in Bioinformatics "
            time="2014-2016"
            place="D Y Patil University, Navi Mumbai, India"
            info={
              <>
                Thesis: <a href="https://drive.google.com/file/d/1wnSvo_kik5OELPsv2ymHKcpBeiFyAfpF/view" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Systems Genetics and Magnetic Resonance Spectroscopy Measurable Biomarkers in Neurodegenerative Diseases</a>
              </>
            }
          />

            <Details
            type="Master of Science in Bioinformatics "
            time="2012-2014"
            place="Utkal University, Bhubaneswar, India"
            info={
              <>
                Thesis: <a href="https://www.researchgate.net/publication/274896591_Mutational_Analysis_and_Structural_study_of_Optineurin_OPTN_in_GlaucomaAn_Insilco_approach" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Mutational Analysis and Structural study of Optineurin (OPTN) in Glaucoma, An Insilco approach</a>
              </>
            }
          />

<Details
            type="Bachelor of Science in Bioinformatics "
            time="2009-2012"
            place="Utkal University, Bhubaneswar, India"
            info="Completed coursework in advanced topics in Bioinformatics such as Molecular Modeling, Drug Designing, Statistical analysis and Biophysics"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
