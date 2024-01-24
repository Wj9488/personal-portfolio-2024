import ParallaxImages from "./AnimatedComponents/ParallaxImages";
import FooterCta from "./FooterCta";
import LargeHeader from "./LargeHeader";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="margin__setter mt-[5rem]">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <LargeHeader customLetter="A" headerText="bout me" />
        </div>
        <p className="lg:w-[20%] lg:mt-[5rem] mt-[2.5rem] absolute top-50 left-[40%]">
          Bilingual English and French creative front-end developer studying
          business and management at Exeter University.
        </p>
      </section>
      <section>
        <ParallaxImages />
      </section>
      <section className="lg:text-lg margin__setter">
        <div className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:absolute lg:top-[200%] xl:top-[180%] 2xl:top-[175%] lg:left-[40%]">
          <p className="opacity-50 mb-[1.25rem]">About Me</p>
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
            skiing, trading in cryptocurrencies, and going to the gym.
          </p>
        </div>
      </section>

      <section className="mt-[5rem] lg:mt-[25rem]">
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 text-lg lg:gap-4 gap-2">
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">3</p>
            <p className="font-medium">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">2.5</p>
            <p className="font-medium">Years of Coding Experience</p>
          </div>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">1</p>
            <p className="font-medium">Bootcamps Taught</p>
          </div>
          <div className="text-center">
            <p className="text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">5</p>
            <p className="font-medium">Coding Languages & Frameworks</p>
          </div>
        </div>
      </section>

      <section className="">
        <FooterCta />
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
