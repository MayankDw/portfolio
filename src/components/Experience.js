import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Postdoctoral Scholar"
              company="Stanford University"
              companyLink="https://profiles.stanford.edu/pritam-panda"
              time="Jan 2025-present"
              address="California, USA"
              work="Spearheaded innovative research at the department of Anesthesiology, Perioperative and Pain Medicine, Stanford University School of Medicine focused on the design of battlefield-optimized anesthetics using AI-driven protein design, molecular dynamics simulations, and computational drug design to enhance anesthetic efficacy and adaptability in extreme conditions."
            />

            <Details
              position="Bioinformatician"
              company="German Cancer Research Center DKFZ"
              companyLink="https://www.dkfz.de/en/index.html"
              time="July 2023-Dec 2024"
              address="Heidelberg, Germany"
              work="Managed large-scale big data projects, automating NGS analysis pipelines, optimizing sequencing workflows with the DKFZ One Touch Pipeline database and leading multidisciplinary teams. Translating/piloting common bioinformatics tools to applications suitable for non-bioinformatics biologists and clinicians to query and interpret the molecular/clinical data."
            />

            <Details
              position="Bioinformatics Engineer | UI/UX Designer"
              company="Helmholtz-Institute for Translational Oncology Mainz (HI-TRON)"
              companyLink="https://hi-tron.dkfz.de/research-support/platforms/data-architecture-platform.html"
              time="July 2023-Dec 2024"
              address="Mainz, Germany"
              work="Implemented the HI-TRON data portal backend & frontend, enhancing data accessibility and user experience through MOLGENIS, VueJs and FAIR practices & and collect feedback and feature requirements from researchers including biologists, clinical trial designers and clinicians."
            />

              <Details
              position="Bioinformatics Consultant"
              company="Colgate & Palmolive"
              companyLink="https://www.colgatepalmolive.com/en-us/who-we-are"
              time="Nov 2021-Jun 2023"
              address="Piscataway-NJ, USA"
              work="Collaborated on developing a pipeline for combinatorial synergy-based drug design targeting photoaging and hyperpigmentation, which led to the publication of an article showcasing the innovative approach and findings. Demonstrated expertise in drug discovery research, with a strong focus on Computer-Aided Drug Design (CADD) methodologies and techniques."
            />

            <Details
              position="Founder & CEO"
              company="Nerdalytics"
              companyLink="https://www.nerdalytics.org/home"
              time="Dec 2021-Jul 2023"
              address="Uppsala, Sweden"
              work="Founded a project management startup specializing in bioinformatics consultancy for pharmaceutical industries, aligning services with industry demands. Adapted company policies, regulations, and financial strategies to effectively manage multiple projects, ensuring long-term viability and sustainability. Led budgeting, coordination, and development of confidential projects with pharmaceutical companies, focusing on defining project scope, cost estimation, and key deliverables."
            />

            <Details
              position="Hackathon Organizer"
              company="LongHack"
              companyLink="https://www.linkedin.com/company/72112157/admin/dashboard/"
              time="Jun 2021-Sep 2022"
              address="Helsinki, Finland"
              work=" Spearheaded the organization of two successful hackathons focused on longevity, showcasing strong leadership and project management skills. Played a key role in identifying potential customers and expanding networks, fostering valuable connections within the scientific and entrepreneurial communities through the hackathon platform. Guided and supported participants throughout the hackathon process,ensuring their understanding and addressing their needs effectively."
            />

            <Details
              position="Clinical Consultant"
              company="Breath of Health"
              companyLink="https://bohpharma.com/Breath-Based-screening.php"
              time="Nov 2021-Dec 2022"
              address="Cambridge, Massachusetts, USA"
              work="Experienced in developing machine learning models and pipelines tailored for next-generation sequencing (NGS) data analysis and automation from exhaled breath samples , optimizing workflows to enhance efficiency and accuracy in proteomics research.  Proficient in supporting clinical and bioinformatics data analysis, contributing to successful funding acquisition and research initiatives."
            />

              <Details
              position="Bioinformatics Consultant"
              company="Inflanova AB"
              companyLink="https://inflanova.com/"
              time="Aug 2021-Mar 2023"
              address="Stockholm, Sweden"
              work="Utilized multiomics and bioinformatics approaches to develop innovative strategies for vaccine design and therapeutic interventions. Played a pivotal role in identifying potential clients within industrial sectors interested in vaccine formulation by leveraging market research and networking skills to establish connections and initiate discussions with prospective partners. Filed a patent WO2023217787 for a clinical vaccine candidate targeting antiviral therapy. "
            />

            <Details
              position="Affiliated Researcher"
              company="Karolinska Institute"
              companyLink="https://ki.se/en/research/research-areas-centres-and-networks/research-groups/johan-frostegards-research-group#tab-projects"
              time="Mar 2021-Mar 2023"
              address="Stockholm, Sweden"
              work="Implemented immunoinformatics pipelines for modeling in-house antibody clones, enabling antibody profiling and simulation to understand the immunomodulatory effects in cardiovascular-related disorders. Enhanced patient stratification and biomarker selection in clinical trials by developing novel predictive models using statistical techniques and machine learning on complex clinical data, including genomic data and antibody clones from patient samples."
            />

            <Details
              position="Doctoral Researcher"
              company="Uppsala University"
              companyLink="https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1736122&dswid=2537"
              time="Nov 2018-Mar 2023"
              address="Uppsala, Sweden"
              work="Developed a multi-scale modeling pipeline, enhancing computational efficiency and accuracy by utilizing molecular dynamics simulations on proteins, nanomaterials, complexes, and membrane models. Bridged quantum and biological behaviors of bio-inspired materials by establishing links to understand interface chemistry, focusing on 2D materials modeling."
            />

            <Details
              position="NGS Data Analyst"
              company="University Medical Center, University of Freiburg"
              companyLink="https://uni-freiburg.de/en/university/university-medical-center/"
              time="Sep 2017-Oct 2018"
              address="Freiburg im Breisgau, Germany"
              work="Enhanced clinical diagnostics for Myelodysplastic Syndromes by developing and validating whole exome sequencing (WES) and NEBNext Direct clinical cancer hotspot panel pipelines, focusing on accurate variant identification and annotation. Spearheaded a collaborative research project to design and analyze WES and gene-expression data using RNA-seq pipelines, leading to significant performance improvements."
            />

              <Details
              position="YouTuber"
              company="Bioinformatics Copilot"
              companyLink="https://www.youtube.com/@BioinfoCopilot"
              time="Jan 2017-present"
              address="California, USA"
              work="Provides in-depth tutorials on bioinformatics tools, techniques, and software, suitable for beginners and advanced users."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
