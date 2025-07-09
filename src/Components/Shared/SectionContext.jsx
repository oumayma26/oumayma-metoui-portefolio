import { createContext, useContext, useState, useEffect } from "react";

const SectionContext = createContext();

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useActiveSection = () => useContext(SectionContext);
