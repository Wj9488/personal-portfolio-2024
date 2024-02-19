import LargeHeader from "@/Components/LargeHeader";
import PageTransition from "@/Components/Utils/PageTransition";
import Reveal from "@/Components/Utils/Reveal";
import Lenis from "@studio-freight/lenis";
import Link from "next/link"

import Head from "next/head"
import { useEffect } from "react"

const About = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
    <Head>
      <title>
        Message Sent!
      </title>
      <link rel="shortcut icon" href="/ws_icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Will Jones | Developer Portfolio" />
        <meta
          property="og:description"
          content="Get the website your small business deserves. Helping professionals and business owners 
            get a modern, responsive and creative website."
        />
        <meta
          name="description"
          content="Get the website your small business deserves. Helping professionals and business owners 
            get a modern, responsive and creative website."
        />
        <meta property="og:image" content="/w__about_p.png" />
        <meta name="keywords" content="" />
    </Head>
    <PageTransition>
    <section className="margin__setter mt-[5rem]">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <LargeHeader customLetter="M" headerText="essage sent" />
        </div>
        <Reveal delay={0.5}>
          <p className="lg:w-[25%] lg:mt-[5rem] mt-[2.5rem] ml-[20%] lg:ml-[40%]">
            Your message was sent, I'll get back to you as soon as I can! 
          </p>
        </Reveal>
        <Link href={"/"}>
                <button className="cta__border text-xl py-2 px-4 rounded-2xl font-medium hvr lg:w-[25%] lg:mt-[5rem] mt-[2.5rem] ml-[20%] lg:ml-[40%]">
                    Return to homepage
                </button>
        </Link>
      </section>
    </PageTransition>
    </>
  );
};

export default About;
