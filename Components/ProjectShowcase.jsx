import Image from "next/image";
import Link from "next/link";

const ProjectShowcase = ({
  projectTitle,
  projectDetails,
  projectLinkText,
  projectLink,
  imgSource,
  imgAlt,
}) => {
  return (
    <div>
      <div className="lg:flex items-start justify-between border__top py-[1.25rem]">
        <div>
            <p className="opacity-50 lg:text-lg text-sm">Project</p>
          <h4 className="font-light text-[3.25rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem]">
            {projectTitle}
          </h4>
        </div>
        <div className="text-lg lg:w-[30%] lg:mb-0 mb-2">
          <p className="opacity-50 mb-2 lg:text-lg text-sm">Project Details</p>
          <p className="">{projectDetails}</p>
        </div>
        <div>
          <p className="opacity-50 mb-2 lg:text-lg text-sm">Live Version</p>
          <Link
            href={projectLink}
            target="_blank"
          >
            <button className="hvr secondary__cta_border text-lg py-2 px-4 rounded-2xl font-medium">
              {projectLinkText}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={imgSource} alt={imgAlt} placeholder="blur" className="w-full h-[auto] rounded-2xl" />
      </div>
    </div>
  );
};

export default ProjectShowcase;
