import { useState } from "react";
import { FaLinkedin, FaGithub, FaFilePdf, FaSun, FaEnvelope } from "react-icons/fa";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import Button from "../components/Button";

const menuItems = [
  // { label: "Accueil", href: "#home" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const renderMenuItems = () =>
    menuItems.map(({ label, href }) => (
      <li key={href}>
        <a href={href} className="hover:text-blue-night">
          {label}
        </a>
      </li>
    ));

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-200 px-4 py-3 shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center relative">

        <div className="absolute left-0 text-xl font-bold text-night-blue px-2">
          Oumayma Metoui
        </div>

        <ul className="hidden sm:flex gap-6 text-center">
          {renderMenuItems()}
        </ul>

        <div className="absolute right-0 hidden sm:flex items-center gap-4 text-xl text-gray-700 px-2">
            {/* <a href="#" > <FaSun /> </a> */}
          <Button href="https://linkedin.com/in/oumayma-metoui-9506412a5" ><FaLinkedin /></Button>
          <Button href="https://github.com/oumayma26" ><FaGithub /></Button>
        </div>

        {/* === Bouton burger - mobile === */}
        <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden ml-auto" aria-label="Toggle menu">
          <img className="w-5" src={showMenu ? close : hamburger} alt="menu" />
        </button>
      </div>

      {/* === Menu mobile === */}
      {showMenu && (
        <ul className="sm:hidden mt-4 flex flex-col gap-4 text-center bg-slate-200 py-4">
          {renderMenuItems()}
        </ul>
      )}
    </nav>
  );
}
