

import { FaLinkedinIn, FaHome,  FaBriefcase,  FaCog, FaEnvelope, FaUser , FaFilePdf} from "react-icons/fa";
import profile from "../../assets/profile.jpg";
import { useActiveSection } from "./SectionContext";
import { FaSquareGithub } from "react-icons/fa6";
import cv from "../../assets/pdf/CV_Oumayma_Metoui_Developpeur_FullStack.pdf"

export default function Sidebar() {
 const { activeSection } = useActiveSection();
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome />},
    // { id: "about", label: "About", icon: <FaUser /> },
    { id: "resume", label: "Resume", icon: <FaBriefcase /> },
    { id: "services", label: "Services", icon: <FaCog /> },
    { id: "contact", label: "Contact", icon: <FaCog /> },
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-gray-900 text-white flex flex-col items-center py-8 space-y-6">
      <img
        src={profile}
        alt="Oumayma Metoui"
        className="w-24 h-24 rounded-full border-4 border-white"
      />
      <h2 className="text-xl font-bold">Oumayma Metoui</h2>

      <div className="flex space-x-4 text-lg">
        <a href="#contact"><FaEnvelope /> </a>
        <a href="https://www.linkedin.com/in/oumayma-metoui-9506412a5/"  target="_blank"> <FaLinkedinIn /> </a>
        <a href="https://github.com/oumayma26"  target="_blank">   <FaSquareGithub /> </a>
        <a href={cv}  target="_blank">   <FaFilePdf className="text-xl" /> </a>

      </div>

      <nav className="flex flex-col w-full mt-6 space-y-2 px-6 text-left">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
              activeSection === id
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
