import ParallaxImages from "./AnimatedComponents/ParallaxImages";
import FooterCta from "./FooterCta";
import LargeHeader from "./LargeHeader";
import Footer from "./Footer";
import AbsoluteText from "./AbsoluteText";

import { useState, useEffect } from "react"
import Reveal from "./Utils/Reveal";

const AboutPage = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setVisible(window.innerWidth > 800);
    };
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])
  return (
    <main className="overflow-x-hidden">
      <div>
        {visible && <AbsoluteText />}
      </div>
      <section className="margin__setter mt-[5rem]">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <LargeHeader customLetter="A" headerText="bout me" />
        </div>
        <Reveal delay={0.5}>
          <p className="lg:w-[25%] lg:mt-[5rem] mt-[2.5rem] ml-[20%] lg:ml-[40%]">
            Currently available for freelance design or coding freelance while I finish my final year of university. 
          </p>
        </Reveal>
      </section>
      <section>
        <ParallaxImages />
      </section>
      <section className="lg:text-lg margin__setter mt-[2.5rem]">
        <div className="lg:ml-[40%]">
          <Reveal delay={0.5}>
            <h2 className="opacity-50 mb-[1.25rem] lg:text-lg text-sm">About Me</h2>
          </Reveal>
          <Reveal delay={0.75}>
            <p>
              I love turning my design ideas into real products that people can
              use. It's very satisfying to use my skills to help clients get great
              websites. 
              <br />
              <br />
              I started with Python, but found it tough at first. This led me to
              learn HTML, which really got me into coding and web development.
              Since then, I've been focusing on front-end development, especially
              using the Next.js framework.
              <br />
              <br />
              After I got better at understanding programming, I went back to
              Python. Now, I even teach workshops in the UK’s biggest student-run
              Python bootcamp, called ExCode. Apart from all this, I also enjoy
              skiing, trading cryptocurrencies, and going to the gym.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-[5rem] lg:mt-[10rem]">
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 text-lg lg:gap-4 gap-2">
        <Reveal delay={0.1}>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">3</p>
            <p className="font-medium">Projects Completed</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">2.5</p>
            <p className="font-medium">Years of Coding Experience</p>
          </div>
          </Reveal>
          <Reveal delay={0.3}>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">1</p>
            <p className="font-medium">Bootcamps Taught</p>
          </div>
          </Reveal>
          <Reveal delay={0.4}>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">5</p>
            <p className="font-medium">Coding Languages & Frameworks</p>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="">
        <FooterCta />
      </section>
    </main>
  );
};

export default AboutPage;
