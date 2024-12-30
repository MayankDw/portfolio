import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/profilepic.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useState, useEffect } from "react";

// News Component
const News = ({ title, img, date, link, type }) => (
  <li className="mb-8 w-full max-w-2xl">
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid border-dark bg-light rounded-2xl shadow-2xl dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light xs:h-[102%] xs:rounded-[1.5rem]" />
      {img && <img src={img} alt={title} className="rounded-t-lg mb-4 w-full" />}
      <h3 className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
        {type}
      </h3>
      <h2 className="my-2 text-3xl font-bold text-center lg:text-2xl">
        {title}
      </h2>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {date}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-lg font-medium text-primary underline md:text-base"
      >
        Read More
      </a>
    </article>
  </li>
);

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data);
    }
    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>Pritam's Portfolio</title>
        <meta
          name="description"
          content="Explore academic journey of Dr. Pritam Panda in AI-driven protein design, drug discovery, and multiomics. Discover how Dr. Panda uses cutting-edge technology to unlock the secrets of life's blueprint and redefine how we explore and innovate in the life sciences."
        />
      </Head>

      <TransitionEffect />
      <article
        className="flex min-h-screen items-center text-dark dark:text-light sm:items-start mt-10 sm:mt-8 md:mt-6 lg:mt-12"
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Pritam"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Atom Odyssey Redefining Life's Blueprint, One Atom at a Time"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled bioinformatician, I bring expertise in AI-driven protein design, drug discovery, and multiomics to uncover the secrets of life's blueprint. I combine computational biology, data science, and cutting-edge web technologies to redefine how we explore and innovate in the life sciences. Where atoms move, life evolves – let the atom dance in harmony.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base mr-4"
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://profiles.stanford.edu/pritam-panda"
                  target={"_blank"}
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base mr-4"
                >
                  Stanford <LinkArrow className="ml-2 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://www.youtube.com/@BioinfoCopilot"
                  target={"_blank"}
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base"
                >
                  YouTube <LinkArrow className="ml-3 !w-6 md:!w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* News Section */}
          <section className="mt-16 w-full">
            <h2 className="font-bold text-4xl w-full text-center mt-16 my-8">
              Latest News
            </h2>

            <ul className="flex flex-col items-center relative">
              {news.length > 0 ? (
                news.map((item, index) => (
                  <News
                    key={index}
                    title={item.title}
                    img={item.img}
                    date={item.time}
                    link={item.link}
                    type={item.type || "News"}
                  />
                ))
              ) : (
                <p className="text-center text-xl font-medium">
                  No news available at the moment.
                </p>
              )}
            </ul>
          </section>
        </Layout>

        <HireMe />
      </article>
    </>
  );
}