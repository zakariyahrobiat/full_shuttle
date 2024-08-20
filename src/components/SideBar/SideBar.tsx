import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/react.svg";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Setting", href: "/" },
  { name: "Log out", href: "/" },
];
interface props {
  className: string;
}
export default function SideBar(props: props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="md:w-1/6">
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <section
        className={`${isOpen ? "absolute" : "hidden"}
            top-0 left-0 md:block bg-white h-screen p-3 transition ease-linear duration-500 ${
              props.className
            }`}
      >
        <div className="flex justify-between items-center">
          <div className="logo">
            <img className="text-black" src={Logo} alt="FUL Shuttle" />
          </div>
          <button onClick={closeMenu} className="text-black block md:hidden">
            X
          </button>
        </div>
        <div>
          <div className="pt-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-black hover:text-gray-300 cursor-pointer block pb-5"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
