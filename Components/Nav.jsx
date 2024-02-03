import Link from "next/link";
import {motion as a, useAnimation} from "framer-motion"
import { useState, useEffect } from "react"

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // New state for storing the last scroll position
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30 && currentScrollY > lastScrollY) {
        controls.start({
          y: -50,
          rotate: -1,
          transition: { duration: 0.25, ease: "easeInOut" }
        });
        setIsVisible(false);
      } else if (!isVisible || currentScrollY < lastScrollY) {
        controls.start({
          y: 0,
          rotate: -0,
          transition: { duration: 0.5, ease: "easeInOut" }
        });
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, controls, lastScrollY]);
  return (
    <a.nav className="z-10 sticky top-1 flex items-center justify-between my-2"
    animate={controls}
    >
      <div className="bg-[#EDEDE9] px-4 lg:py-1 py-2 rounded-2xl z-10">
        <Link className="lg:text-lg font-medium lg:font-normal" href={"/"}>
          William.Jones
        </Link>
      </div>
      <div>
        <ul className="z-10 flex items-center justify-between gap-4 lg:gap-8 xl:gap-10 bg-[#EDEDE9] px-4 py-1 rounded-2xl">
          <li className="lg:text-lg lg:my-[0rem] my-1">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/#projects"}>Projects</Link>
          </li>
          <li className="lg:text-lg ">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/about"}>About</Link>
          </li>
          <Link href={"/contact"}>
            <button className="hvr cta__border py-1 lg:px-4 px-2 rounded-2xl font-medium">
                Let's Talk
            </button>
          </Link>
        </ul>
      </div>
    </a.nav>
  );
};

export default Nav;
