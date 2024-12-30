import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { YouTubeIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/youtube/nvidia.png";
import proj2 from "../../public/images/youtube/autodock.png";
import proj3 from "../../public/images/youtube/MDsimulation2.png";
import proj4 from "../../public/images/youtube/playlist1.png";
import proj5 from "../../public/images/youtube/playlist2.png";
import proj6 from "../../public/images/youtube/playlist3.png";
import proj7 from "../../public/images/youtube/playlist4.png";
import proj8 from "../../public/images/youtube/playlist5.png";
import proj9 from "../../public/images/youtube/playlist6.png";
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
            aria-label="Latest Bioinformatics Youtube Videos"
          >
            YouTube
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
        <title>Pritam's Portfolio | YouTube Page</title>
        <meta
          name="description"
          content="Discover the latest bioinformatics videos and tutorials on YouTube."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

<section className="w-full text-center">
  <p className="md:text-sm sm:!text-xs font-medium text-dark dark:text-light mb-8 mx-auto max-w-2xl">
  Dive deep into the fascinating world of bioinformatics!
Learn cutting-edge tools, techniques, and workflows with our step-by-step tutorials.
Perfect for beginners and experts alike—fuel your curiosity and master the art of data science in biology.
Subscribe now to explore, innovate, and lead the way in bioinformatics! 
  </p>
  <Link
    href="https://www.youtube.com/@BioinfoCopilot"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-dark text-light px-5 py-1.5 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-dark border-2 border-dark 
    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light transition-colors md:p-2 md:px-4 md:text-base"
  >
    YouTube 
  </Link>
</section>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 mt-16">
            <div className="col-span-12">
              <FeaturedProject
                type="Drug Discovery"
                title="Nvidia Generative AI for Docking & Virtual Screening"
                summary="NVIDIA BioNeMo microservices enable a new generative screening paradigm. DiffDock is a diffusion generative model for drug discovery in molecular blind docking."
                img={proj1}
                link="https://www.youtube.com/watch?v=AsmQhvFAS80"
                github="https://github.com/gcorso/DiffDock"
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedProject
                type="Drug Discovery"
                title="Molecular Docking for Beginners | Autodock Full Tutorial"
                summary="This tutorial will introduce you to docking using the AutoDock suite of programs. "
                img={proj2}
                link=" https://www.youtube.com/watch?v=ZVKKsK5DsCY&t=5374s"
                github="https://github.com/pritampanda15/Drug-Designing"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Molecular Dynamics Simulation"
                title="Molecular Dynamics Simulation of Protein-Ligand using Gromacs"
                summary="This tutorial focuses specifically on issues related to dealing with the ligand, assuming that the user is familiar with basic GROMACS operations and the contents of a topology.  "
                img={proj3}
                link=" https://www.youtube.com/watch?v=hc8ZXbOMEfw&list=PLS3KFDv2o0CQIvkKuL7kU2rfowWIfHFFN&index=6"
                github="https://github.com/pritampanda15/Molecular-Dynamics"
              />
            </div>


            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Drug Designing"
                img={proj4}
                title="Molecular Docking Playlist"
                link="https://www.youtube.com/watch?v=j6gRyBHn2JU&list=PLS3KFDv2o0CR327JLYQvAN7WI59GqdwPU&pp=gAQB"
                github="https://github.com/pritampanda15/Drug-Designing"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Molecular Dynamics Simulation"
                img={proj5}
                title="Molecular Dynamics Simulation Playlist"
                link="https://www.youtube.com/watch?v=27lf1qLP7QU&list=PLS3KFDv2o0CQIvkKuL7kU2rfowWIfHFFN&pp=gAQB"
                github="https://github.com/pritampanda15/Molecular-Dynamics"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="NGS"
                img={proj6}
                title="Nextflow Playlist"
                link="https://www.youtube.com/watch?v=7fIY0kV9x6o&list=PLS3KFDv2o0CQxUuyAMyYdp_PoiVbdSa_8&pp=gAQB"
                github="https://github.com/pritampanda15/NGS-Workflows"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="NGS"
                img={proj7}
                title="Next-Gen Sequencing Tools"
                link="https://www.youtube.com/watch?v=XstXZrCtpB4&list=PLS3KFDv2o0CTIHjh-6lp7qgrqgcDvswvG&pp=gAQB"
                github="https://github.com/pritampanda15/NGS-Workflows"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Proteomics"
                img={proj8}
                title="Flow Cytometry Analysis"
                link="https://www.youtube.com/watch?v=9OGWdYiBoO0&list=PLS3KFDv2o0CTgxt_aKQZNHPYeb95qJvhR&pp=gAQB"
                github="https://github.com/pritampanda15/Proteomics"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Quantum Physics"
                img={proj9}
                title="Siesta & Transiesta"
                link="https://www.youtube.com/watch?v=VcqnYwb4kws&list=PLS3KFDv2o0CTV8bJ9clpDW4I-CReFSKG-&pp=gAQB"
                github="https://github.com/pritampanda15/Siesta"
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}
