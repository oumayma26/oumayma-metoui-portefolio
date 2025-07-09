import { Link, useLocation } from "react-router-dom";
import { useActiveSection } from "./SectionContext";

export default function SidebarItem({ icon, label, to }) {

  const { activeSection } = useActiveSection();

  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
        isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
      }`}
      // className={`flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer ${
      //   active ? "bg-gray-800 font-semibold" : ""
      // }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
