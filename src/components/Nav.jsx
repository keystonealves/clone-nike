import { hamburger, cross } from "../assets/icons/index.js";
import { headerLogo } from "../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = `padding-x py-6 fixed z-10 w-full z-20 transition ease-in ${
    scrolling ? "bg-white shadow-md" : ""
  }`;

  const menuClass = `lg:hidden fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 transform ${
    menuOpen ? "translate-x-0" : "-translate-x-64"
  } transition-transform`;

  return (
    <header className={headerClass}>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-montserrat leading-normal text-lg text-slate-gray ${
                  link.href === "#sign-in" ? "font-bold" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* TOGGLE MENU */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>

      <div className={menuClass}>
        <div className="px-4 py-2 flex justify-between items-center">
          {/* <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                    </a> */}

          <div
            className="bg-slate-gray rounded-full p-1 absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              src={cross}
              alt=""
              width={20}
              height={20}
              style={{ fill: "white" }}
            />
          </div>
        </div>
        <ul className="p-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-montserrat leading-10 text-lg text-slate-gray ${
                  link.href === "#sign-in" ? "font-bold" : ""
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
