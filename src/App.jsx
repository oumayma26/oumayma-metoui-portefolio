import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { SectionProvider } from "./Components/Shared/SectionContext";
import ScrollToHash from "./Components/Shared/ScrollToHash";
import Sidebar from "./Components/Shared/Sidebar";
import Home from "./Components/Home";

export default function App() {
  return (
     <BrowserRouter>
      <SectionProvider>
        <ScrollToHash />
        <div className="flex">
          <Sidebar />
          <main className="ml-64 p-8 space-y-32 w-full">
            <Home />
            <About />
            <Resume />
            <Services />
            <Contact />
          </main>
        </div>
      </SectionProvider>
    </BrowserRouter>
  );
}