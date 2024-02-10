import Image from "next/image";

import { useState, useEffect } from "react"

import LargeHeader from "./LargeHeader";
import GlobalCta from "./GlobalCta";

import HomePageImage from "../public/Images/w__home.jpg";
import StrongWordsImage from "../public/Images/strong__words.jpg";
import FrenchForAllImage from "../public/Images/french__for_all.webp";
import BirdlimeImage from "../public/Images/birdlime.jpg";

import SmallHeader from "./SmallHeader";
import AbsoluteText from "./AbsoluteText";
import SecondaryCta from "./SecondaryCta";
import ProjectShowcase from "./ProjectShowcase";
import FooterCta from "./FooterCta";

import Reveal from "./Utils/Reveal";
import SlidingImage from "./Utils/AnimatedImage";

const HomePage = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setVisible(window.innerWidth > 800);
    };
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const workExperienceData = {
    experiences: [
      {
        companyName: "Exeter Entrepreneurs Society",
        position: "Python Workshop Leader",
        period: "Sept 2023 - Nov 2023",
      },
      {
        companyName: "Array",
        position: "Design & Web Dev Intern",
        period: "May 2023 - July 2023",
      },
      {
        companyName: "Thousand Lines",
        position: "Web Dev Intern",
        period: "May 2023 - July 2023",
      },
    ],
  };
  return (
    <>
      <main className="overflow-x-hidden">
      <div>
        {visible && <AbsoluteText />}
      </div>
        <section className="margin__setter mt-[5rem] lg:mt-[3rem] xl:mt-[5rem] 2xl:mt-[7.5rem]">
          <div className="lg:flex items-end justify-between">
            <LargeHeader
              customLetter="C"
              headerText="reative front end developer"
            />
            <Reveal delay={0.5}>
              <p className="lg:w-[70%] lg:ml-[2.5rem] lg:mt-[0rem] mt-[2.5rem]">
                Bilingual English and French creative front-end developer studying
                business and management at Exeter University.
              </p>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <p className="font-medium lg:w-[50%] my-[2.5rem] text-2xl">
              I help small businesses and professional stand out from competitors
              with a fast, dynamic and modern website.
            </p>
          </Reveal>
          <GlobalCta ctaText="Contact me" />
        </section>

        <section className="">
          <div className="lg:flex lg:ml-[40%] mx-auto w-[95%] items-end lg:w-full lg:mr-[2.5%] lg:gap-[2rem]">
            <div className="lg:order-2">
              <SlidingImage src={HomePageImage} width="400" height="600" className="w-[full] h-[auto] xl:w-[400px] xl:h-[600px] 2xl:w-[550px] 2xl:h-[auto] rounded-2xl mt-[5rem] mb-[2.5rem] lg:my-[2.5rem] z-[5]" />
            </div>
            <p className="mb-[5rem] lg:w-[25%] xl:w-[30%] 2xl:w-[25%] lg:order-1">
              Starting in 2021, I’ve amassed over 2 years of experience working
              on both personal projects and client projects alongside agencies
              or freelancing.
            </p>
          </div>
        </section>

        <section className="margin__setter">
          <SmallHeader customLetter="W" headerText="ork experience" />
          <div className="lg:ml-[40%] mt-[5rem]">
            <div className="">
              <div className="grid grid-cols-1 grid-rows-3 my-[2.5rem]">
                {workExperienceData.experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="text-base lg:text-lg border__bottom lg:grid lg:grid-cols-3 gap-4 grid-rows-1 items-start py-[1rem]"
                  >
                    <div className="">
                      <p className="opacity-50 mb-2 text-sm lg:text-lg">
                        Company Name
                      </p>
                      <p>{experience.companyName}</p>
                    </div>
                    <div className="">
                      <p className="opacity-50 my-2 text-sm lg:text-lg">
                        Position
                      </p>
                      <p>{experience.position}</p>
                    </div>
                    <div className="">
                      <p className="opacity-50 my-2 text-sm lg:text-lg">
                        Period
                      </p>
                      <p>{experience.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[5rem] lg:mt-[5rem] mb-[2.5rem] flex items-center gap-[1.25rem]">
            <GlobalCta ctaText="Let's work together" />
            <SecondaryCta ctaText="Contact me on LinkedIn" />
          </div>
        </section>

        <section className="margin__setter mt-[4.5rem]" id="projects">
          <SmallHeader customLetter="P" headerText="rojects" />
          <div>
            <ProjectShowcase
              projectTitle="Strong Words"
              projectDetails="Created in collaboration with Array® for a content creation business focussing on the book review niche. The client tasked us with enhancing their brand’s online presence with a modern website rebrand. The business, wanting to cater to the growing demand for digital offerings, also tasked us with creating a sleek new email newsletter offering for readers.  "
              projectLink="https://strong-words.co.uk"
              projectLinkText="See live site"
              imgAlt="Strong Words"
              imgSource={StrongWordsImage}
            />
          </div>
          <div className="mt-[1.25rem]">
            <ProjectShowcase
              projectTitle="French For All"
              projectDetails="A freelance project built for a professional native French Tutor doing both online and in-person teaching to clients. I was tasked with building a fully responsive, effective and modern website to convert more traffic from Facebook into paying clients."
              projectLink="https://french-lesson.com"
              projectLinkText="See live site"
              imgAlt="French For All"
              imgSource={FrenchForAllImage}
            />
          </div>
          <div className="mt-[1.25rem] my-[5rem]">
            <ProjectShowcase
              projectTitle="Birdlime Media"
              projectDetails="An ongoing project worked on during my internship at Thousand Lines® for a London based production company. Birdlime media makes videos and podcasts for charities broadcasters and brands focussing on developing new talent from underrepresented backgrounds and offering them paid work experience.  "
              projectLink="#"
              projectLinkText="Coming Soon"
              imgAlt="Birdlime Media"
              imgSource={BirdlimeImage}
            />
          </div>
          <div className="my-[2.5rem] flex items-center gap-[1.25rem]">
            <GlobalCta ctaText="Let's work together" />
            <SecondaryCta ctaText="Contact me on LinkedIn" />
          </div>
        </section>

        <section className="margin__setter mt-[5rem]">
          <div className="lg:w-1/2">
            <SmallHeader
              customLetter="L"
              headerText="anguages and frameworks I use"
            />
          </div>
          <div className="grid grid-cols-2 lg:gap-12 gap-4 lg:grid-cols-4 grid-rows-1 text-lg border__top py-[1rem]">
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">
                Coding Languages
              </p>
              <p className="">
                HTML 5
                <br />
                CSS
                <br />
                Javascript
                <br />
                Python
                <br />
                Typescript
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">Frameworks</p>
              <p className="">
                React
                <br />
                Next Js
                <br />
                Tailwind CSS
                <br />
                SCSS
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">Animation</p>
              <p className="">
                GSAP
                <br />
                Framer-Motion
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">
                Microsoft Office
              </p>
              <p className="">
                Outlook
                <br />
                Excel
                <br />
                Powerpoint
                <br />
                Word
                <br />
                Power Automate
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <FooterCta />
        </section>
      </main>
    </>
  );
};

export default HomePage;
