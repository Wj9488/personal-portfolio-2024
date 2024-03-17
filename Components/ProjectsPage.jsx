import LargeHeader from "./LargeHeader";
import ProjectShowcase from "./ProjectShowcase";
import FooterCta from "./FooterCta";
import Reveal from "./Utils/Reveal";

import StrongWordsImage from "../public/Images/strong__words.jpg";
import FrenchForAllImage from "../public/Images/french__for_all.webp";
import BirdlimeImage from "../public/Images/birdlime.jpg";
import FrenchForAllThumb from "../public/Images/french__for_all_thumb.webp"
import StrongWordsThumb from "../public/Images/strong__words_thumb.webp"

import { useScroll, useTransform, motion as a } from "framer-motion";

const ProjectsPage = () => {

  const { scrollYProgress } = useScroll();

  return (
    <main>
        <section className="margin__setter mt-[5rem]">
            <div className="ml-[1.25rem] lg:ml-[7.5rem] mb-[5rem] lg:mb-[10rem]">
                <LargeHeader customLetter="W" headerText="ork" />
            </div>
        </section>
        <section className="margin__setter mt-[4.5rem]" id="projects">
        <div className="relative">
          <div className="mt-[1.25rem]">
            <ProjectShowcase
              projectTitle="Strong Words"
              projectDetails="Created in collaboration with Array® for a content creation business focussing on the book review niche. The client tasked us with enhancing their brand’s online presence with a modern website rebrand. The business, wanting to cater to the growing demand for digital offerings, also tasked us with creating a sleek new email newsletter offering for readers.  "
              projectLink="https://strong-words.co.uk"
              projectLinkText="See live site"
              imgAlt="Strong Words"
              imgSource={StrongWordsImage}
              thumbAlt="Strong Words Thumbnail"
              thumbSource={StrongWordsThumb}
              translationheight="-900px"
            />
          </div>
          <ProjectShowcase
              projectTitle="French For All"
              projectDetails="A freelance project built for a professional native French Tutor doing both online and in-person teaching to clients. I was tasked with building a fully responsive, effective and modern website to convert more traffic from Facebook into paying clients."
              projectLink="https://french-lesson.com"
              projectLinkText="See live site"
              imgAlt="French For All"
              imgSource={FrenchForAllImage}
              thumbAlt="French For All Thumb"
              thumbSource={FrenchForAllThumb}
              translationheight="-600px"
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
              translationheight="-600px"
            />
          </div>
        </section>
        <FooterCta />
    </main>
  );
};

export default ProjectsPage;
