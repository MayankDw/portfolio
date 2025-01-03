import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/aboutuspic.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Purpose from "@/components/Purpose"
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Retail Analytics| About Page</title>
        <meta name="description" 
        content="Turn your retail data into valuable insights and help drives sales and company's growth" />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Data Drive Sales!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <p className="mb-4 font-medium ">
                At <strong>Retail Analytica</strong>, we transform data into actionable insights, empowering retailers to stay ahead in an ever-evolving market. Specializing in advanced analytics and innovative solutions, we help businesses optimize operations, enhance customer experiences, and drive sustainable growth.
              </p>

              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our Mission
              </h1>

              <p className="mb-4 font-medium">
              Our mission is to revolutionize the retail industry by providing cutting-edge analytics tools and expert guidance. We aim to help retailers unlock the full potential of their data, enabling them to make informed decisions and thrive in a competitive environment.
              </p>

              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                What We Do
              </h1>

              <p className="mb-4 font-medium ">
              Retail Analytica offers a comprehensive suite of analytics solutions tailored to the unique challenges of the retail sector. From customer behavior analysis to inventory optimization, we deliver insights that drive profitability and efficiency. Our services include:
              </p>
              <p className="font-medium">
              <strong>Customer Insights and Personalization</strong> 
              </p>
              <p className="font-medium">
              <strong>Operational Excellence</strong> 
              </p>
              <p className="font-medium">
              <strong>Marketing Intelligence</strong> 
              </p>
              <p className="mb-6 font-medium">
              <strong>Omnichannel Analytics</strong> 
              </p>

              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Why Choose Us
              </h1>

              <p className="mb-4 font-medium">
              <strong>Data-Driven Approach:</strong> Leverage the power of AI and machine learning to uncover deep insights.
              </p>
              <p className="mb-4 font-medium">
              <strong>Retail Expertise:</strong> Benefit from our industry-focused knowledge and experience.
              </p>
              <p className="mb-4 font-medium">
              <strong>Scalable Solutions:</strong> From small businesses to global enterprises, our tools are designed to grow with you.
              </p>
              <p className="mb-4 font-medium">
              <strong>Commitment to Success:</strong> Partner with a team that prioritizes your business goals and ensures measurable outcomes.
              </p>

              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Our Vision
              </h1>

              <p className="font-medium">
              We envision a future where every retailer harnesses the power of data to deliver exceptional value to their customers and stakeholders. At Retail Analytica, we are committed to shaping that future through innovation, collaboration, and a relentless focus on results.
              </p>

            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Offerings
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={7} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Clients
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Purpose />
        </Layout>
      </main>
    </>
  );
}
