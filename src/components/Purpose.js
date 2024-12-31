import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Purpose = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Purpose
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              work="Data isn’t just numbers – it’s the roadmap to retail success! We provide a New Perspective on Retail Data Analytics"
            />

            <Details
              work="At Retail Analytica, We empower you to make smarter, real-time decisions with every customer interaction. Transform your data into actionable insights to deliver personalized shopping experiences, optimize inventory management, and streamline retail operations."
            />

            <Details
              work="At Retail Analytica, our mission is simple: to empower the retailers and brands we partner with to become world-class, digital-first businesses. We equip them to tackle any challenge, from evolving market trends to global disruptions, with resilience and innovation."
            />

            <Details
              work="With Retail Analytica, you can precisely align demand and supply, deliver contextually relevant customer experiences throughout their lifecycle, and achieve rapid time-to-market, driving immediate ROI for your business. You can rely on us to continually refine our algorithms and solutions to help you meet and exceed the challenges ahead"
            />

            <Details
              work="Retail Analytica empowers consumer businesses to maximize customer value by automating decision-making across the entire retail lifecycle. "
            />

            <Details
              work="Experienced in developing machine learning models and pipelines tailored for next-generation sequencing (NGS) data analysis and automation from exhaled breath samples , optimizing workflows to enhance efficiency and accuracy in proteomics research.  Proficient in supporting clinical and bioinformatics data analysis, contributing to successful funding acquisition and research initiatives."
            />

            <Details
              work="Our AI-powered solutions seamlessly integrate into Planning, Merchandising, Purchasing, Sales, eCommerce, Trade management, Invoicing, Accounting and Supply Chain operations, enabling smarter, faster, and more impactful decisions that drive growth and efficiency"
            />

          </ul>
        </div>
        </div>
    );
};

export default Purpose;