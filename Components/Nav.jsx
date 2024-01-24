import Link from "next/link";

const Nav = () => {
  return (
    <nav className="z-10 sticky top-1 flex items-center justify-between my-2">
      <div className="bg-[#EDEDE9] px-4 lg:py-1 py-2 rounded-2xl z-10">
        <Link className="lg:text-lg font-medium lg:font-normal" href={"/"}>
          William.Jones
        </Link>
      </div>
      <div>
        <ul className="z-10 flex items-center justify-between gap-4 lg:gap-8 xl:gap-10 bg-[#EDEDE9] px-4 py-1 rounded-2xl">
          <li className="lg:text-lg lg:my-[0rem] my-1">
            <Link href={"/#projects"}>Projects</Link>
          </li>
          <li className="lg:text-lg ">
            <Link href={"/about"}>About</Link>
          </li>
          <Link href={"/contact"}>
            <button className=" cta__border py-1 lg:px-4 px-2 rounded-2xl font-medium">
                Let's Talk
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
