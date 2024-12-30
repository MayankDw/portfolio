import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/gridbox.png";
import proj2 from "../../public/images/projects/Structufy.png";
import proj3 from "../../public/images/projects/step.png";
import proj4 from "../../public/images/projects/gromacs.png";
import proj5 from "../../public/images/projects/siesta.png";
import proj6 from "../../public/images/projects/ngs.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Pritam's Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest bioinformatics projects created by Pritam"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Projects with Purpose, Progress with Passion!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Grid-Box-Generator"
                summary="Generate a grid box for AutoDock Vina using Python web-app created using Flask without the need for MGLTools. This app helps you to generate or define grid box for Autodock Vina and Autodock4 for both blind and targeted docking."
                img={proj1}
                link="https://grid-box-generator-bcb8da462cd0.herokuapp.com"
                github="https://github.com/pritampanda15/Grid-Box-Generator"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Drug Designing tool"
                title="Structify-Chemical-Structure-Converter"
                img={proj2}
                link="https://structify-chemical-converter-f735c2cc4ea3.herokuapp.com"
                github="https://github.com/pritampanda15/Structify-Chemical-Structure-Converter"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Molecular Dynamics Tool"
                title="GROMACS-StepWizard"
                img={proj3}
                link="https://gromacs-stepwizard-7e3791398062.herokuapp.com"
                github="https://github.com/pritampanda15/GROMACS-StepWizard"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Molecular Dynamics"
                title="Gromacs-Command-Finder"
                summary="Gromacs Command Finder is a tool to search for gromacs specific comands like topology, trajectory analysis, PME, etc."
                img={proj4}
                link=" https://gromacs-command-finder-a9630d013893.herokuapp.com/"
                github="https://github.com/pritampanda15/Gromacs-Command-Finder"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Quantum Physics"
                img={proj5}
                title="Siesta"
                link="https://github.com/pritampanda15/Siesta/blob/master/relax.fdf"
                github="https://github.com/pritampanda15/Siesta"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="NGS"
                img={proj6}
                title="WES Pipeline"
                link="https://github.com/pritampanda15/NGS-Workflows/tree/main/WholeExomeSequencing-Pipeline-main"
                github="https://github.com/pritampanda15/NGS-Workflows/tree/main"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
