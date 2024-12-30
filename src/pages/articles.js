import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/science.png";
import blog2 from "../../public/images/articles/nature.png";
import blog3 from "../../public/images/articles/blog3.jpg";
import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { useState, useEffect } from "react";



const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};


const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Pritam's Portfolio | Publications Page</title>
        <meta name="description" content="Browse through Pritam's scientific publications"/>
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Innovative Insights, Infinite Possibilities!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
         
         <section className="w-full text-center">
  <p className="md:text-sm sm:!text-xs font-medium text-dark dark:text-light mb-8 mx-auto max-w-2xl">
    Explore the breakthroughs and innovations that are transforming the fields of bioinformatics, AI-driven research, and drug discovery. From cutting-edge projects to collaborations with leading institutions, stay updated on the journey to redefine how we approach the mysteries of life sciences.
  </p>
  <Link
    href="https://scholar.google.com/citations?user=YOUR_PROFILE_ID&user=H2ggrzQAAAAJ"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-dark text-light px-5 py-1.5 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-dark border-2 border-dark 
    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light transition-colors md:p-2 md:px-4 md:text-base"
  >
    Google Scholar 
  </Link>
</section>

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 mt-16">
            <FeaturedArticle
              img={blog1}
              title="Structure-based drug designing and immunoinformatics approach for SARS-CoV-2"
              time="Science Advances (AAAS)"
              summary="After virtually screening 640 existing drug compounds, researchers have revealed that PC786 potently targets several SARS-CoV-2 receptors, making it a candidate to fight COVID-19."
              link="https://www.science.org/doi/full/10.1126/sciadv.abb8097"
            />

            <FeaturedArticle
              img={blog2}
              title="Clinical evolution, genetic landscape and trajectories of clonal hematopoiesis in SAMD9/SAMD9L syndromes"
              time="Nature Medicine"
              summary="Genetic rescue, a 'natural gene therapy,' suggests possible new approach to pediatric MDS. Single-cell DNA analysis has identified a “battle of clones” in pediatric (MDS) patients whose cells may self-correct."
              link="https://www.nature.com/articles/s41591-021-01511-6"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="A novel professional-use synergistic peel technology to reduce visible hyperpigmentation on face: Clinical evidence and mechanistic understanding by computational biology and optical biopsy"
              //img={blog3}
              date="Experimental Dermatology, Wiley"
              link="https://onlinelibrary.wiley.com/doi/full/10.1111/exd.15069"
            />
            <Article
              title="Degradation of Alzheimer's Amyloid-β by a Catalytically Inactive Insulin-Degrading Enzyme"
              //img={blog4}
              date="Journal of molecular biology"
              link="https://www.sciencedirect.com/science/article/abs/pii/S0022283621001947?via%3Dihub"
            />
            <Article
              title="Azacitidine is effective for targeting leukemia-initiating cells in juvenile myelomonocytic leukemia"
              //img={blog5}
              date="Nature Leukemia"
              link="https://www.nature.com/articles/s41375-018-0343-2"
            />
            <Article
              title="Investigation of the Factors That Dictate the Preferred Orientation of Lexitropsins in the Minor Groove of DNA. "
              //img={blog6}
              date="Journal of medicinal chemistry"
              link="https://pubs.acs.org/doi/10.1021/acs.jmedchem.9b01534"
            />
            <Article
              title="Nanocarrier vaccine therapeutics for global infectious and chronic diseases "
              //img={blog7}
              date="Materials Today"
              link="https://www.sciencedirect.com/science/article/pii/S1369702123001128?via%3Dihub"
            />
            <Article
              title="Putative targeting by BX795 causes decrease in protein kinase C protein levels and inhibition of HSV1 infection"
              date="Antiviral research"
              //img={blog8}
              link="https://www.sciencedirect.com/science/article/abs/pii/S0166354222002236?via%3Dihub"
            />
            <Article
              title="Antibodies Against Phosphorylcholine Among 60-Year-Olds: Clinical Role and Simulated Interactions"
              date="Frontiers in cardiovascular medicine"
              //img={blog8}
              link="https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2022.809007/full"
            />
            <Article
              title="Nanocarrier cancer therapeutics with functional stimuli-responsive mechanisms"
              date="Journal of nanobiotechnology"
              //img={blog8}
              link="https://jnanobiotechnology.biomedcentral.com/articles/10.1186/s12951-022-01364-2"
            />
            <Article
              title="Dynamical modeling of miR-34a, miR-449a, and miR-16 reveals numerous DDR signaling pathways regulating senescence, autophagy, and apoptosis in HeLa cells"
              date="Scientific reports"
              //img={blog8}
              link="https://www.nature.com/articles/s41598-022-08900-y"
            />
            <Article
              title="Plasmodium falciparum HSP40 protein eCiJp traffics to the erythrocyte cytoskeleton and interacts with the human HSP70 chaperone HSPA1"
              date="FEBS letters"
              //img={blog8}
              link="https://febs.onlinelibrary.wiley.com/doi/10.1002/1873-3468.14255"
            />
            <Article
              title="Molecular nanoinformatics approach assessing the biocompatibility of biogenic silver nanoparticles with channelized intrinsic steatosis and apoptosis "
              date="Green Chemistry"
              //img={blog8}
              link="https://pubs.rsc.org/en/content/articlelanding/2022/gc/d1gc04103g"
            />
            <Article
              title="Effects of Atorvastatin on T-Cell Activation and Apoptosis in Systemic Lupus Erythematosus and Novel Simulated Interactions With C-Reactive Protein and Interleukin 6"
              date="ACR open rheumatology"
              //img={blog8}
              link="https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr2.11305"
            />
            <Article
              title="The mechanism behind flaring/triggering of autoimmunity disorders associated with COVID-19"
              date="Autoimmunity reviews"
              //img={blog8}
              link="https://www.sciencedirect.com/science/article/pii/S1568997221001841?via%3Dihub"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}