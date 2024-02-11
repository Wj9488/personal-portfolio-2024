import Link from "next/link"
import Image from "next/image"
import { useScroll, useTransform, motion as a } from "framer-motion"
import GithubImg from "../public/Images/github-mark.png"

const Footer = ({initialVar, minusVar}) => {
  const { scrollYProgress } = useScroll();
  const footerDivTransform = useTransform(scrollYProgress, [initialVar, 1], [minusVar, "0px"]);
  const z = useTransform(scrollYProgress, [0, 1], [-90, 1]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <a.footer className="relative mt-[4rem] mb-[2.5rem] border__top text-lg margin__setter global__bg"
      style={{y: footerDivTransform, zIndex: z}}
    >
      <div className="flex items-center justify-between pt-1">
        <p>William.Jones</p>
        <ul className="flex items-center justify-between gap-10 px-4 py-1 rounded-2xl">
          <li>
            <Link href={"https://github.com/Wj9488"} target="_blank">
              <Image 
                src={GithubImg}
                alt="Github Logo"
                width={20}
                height={20}
                className="hover:scale-[1.05] transition-all duration-200 lg:block hidden"
              />
            </Link>
          </li>
          <li className="lg:text-lg">
            <button className="hover:opacity-50 transition-all duration-200" onClick={scrollTop}>Back to top</button>
          </li>
          <li className="lg:text-lg hidden lg:block">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/#projects"}>Projects</Link>
          </li>
          <li className="lg:text-lg">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              marginTop: "1rem",
              height: `${1 + 0.5 * index}px`,
              backgroundColor: '#070707', 
            }}
          />
        ))}
    </a.footer>
  );
};

export default Footer;
