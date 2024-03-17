import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Reveal from "./Utils/Reveal";

import { useScroll, useTransform, motion as a } from "framer-motion";

const ProjectShowcase = ({
  projectTitle,
  projectDetails,
  projectLinkText,
  projectLink,
  imgSource,
  imgAlt,
  thumbSource,
  thumbAlt,
  translationheight
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Always call useTransform, but manipulate its output based on window width.
  const rawTranslateImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", translationheight]
  );

  const [translateImage, setTranslateImage] = useState(rawTranslateImage);

  useEffect(() => {
    const updateTransform = () => {
      setTranslateImage(window.innerWidth > 1000 ? rawTranslateImage : "0px");
    };

    // Initial check and set
    updateTransform();

    // Update on window resize
    window.addEventListener("resize", updateTransform);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateTransform);
  }, [rawTranslateImage]); // Dependency on rawTranslateImage to update if it changes

  return (
    <div>
      <div className="lg:flex items-start justify-between border__top py-[1.25rem]">
        <div>
          <p className="opacity-50 lg:text-lg text-sm">Project</p>
          <Reveal delay={0.25}>
            <h4 className="font-light text-[3.25rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem]">
              {projectTitle}
            </h4>
          </Reveal>
        </div>
        <div className="text-lg lg:w-[30%] lg:mb-0 mb-2">
          <p className="opacity-50 mb-2 lg:text-lg text-sm">Project Details</p>
          <Reveal delay={0.275}>
            <p className="">{projectDetails}</p>
          </Reveal>
        </div>
        <div>
          <p className="opacity-50 mb-2 lg:text-lg text-sm">Live Version</p>
          <Reveal delay={0.3}>
            <Link href={projectLink} target="_blank">
              <button className="hvr secondary__cta_border text-lg py-2 px-4 rounded-2xl font-medium">
                {projectLinkText}
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <a.div style={{ scale }}>
          <Image
            src={imgSource}
            alt={imgAlt}
            placeholder="blur"
            className="w-full h-[auto] rounded-2xl"
          />
        </a.div>
        <a.div
          className="absolute top-[15%] lg:top-[45%] mx-[1rem] lg:mx-[6rem]"
          style={{ y: translateImage }}
        >
          <Image
            src={thumbSource}
            alt={thumbAlt}
            width={1250}
            height="auto"
            className="2xl:w-[2000px] lg:w-[1250px] w-[1750px] h-[auto] rounded-2xl"
          />
        </a.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
