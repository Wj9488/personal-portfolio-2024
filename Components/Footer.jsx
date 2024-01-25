import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-[10rem] mb-[2.5rem] border__top text-lg margin__setter">
      <div className="flex items-center justify-between pt-1">
        <p>William.Jones</p>
        <ul className="flex items-center justify-between gap-10 bg-[#EDEDE9] px-4 py-1 rounded-2xl">
          <li className="lg:text-lg">
            <Link className="hover:opacity-50 transition-all duration-200" href={"/#"}>Back to top</Link>
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
    </footer>
  );
};

export default Footer;
