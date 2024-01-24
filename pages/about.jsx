import LargeHeader from "@/Components/LargeHeader";
import PageTransition from "@/Components/Utils/PageTransition";
import AboutPage from "@/Components/AboutPage";

import Head from "next/head"

const About = () => {
  return (
    <>
    <Head>
      <title>
        Will Jones | About
      </title>
      <link rel="shortcut icon" href="/" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Will Jones"/>
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
      <meta property="og:image" content="/" />
      <meta
        name="keywords"
        content=""
      />
    </Head>
    <PageTransition>
      <AboutPage />
    </PageTransition>
    </>
  );
};

export default About;
