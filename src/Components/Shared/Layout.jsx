import About from "../About";
import Resume from "../Resume";
import Services from "../Services";
import Contact from "../Contact";
import Sidebar from "./Sidebar";
import Home from "../Home";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 flex-1 px-10 py-10 overflow-y-auto scroll-smooth">
        <section id="home" className="mb-20"><Home /></section>
        <section id="about" className="mb-20"><About /></section>
        <section id="resume" className="mb-20"><Resume /></section>
        <section id="services" className="mb-20"><Services /></section>
        <section id="contact" className="mb-20"><Contact /></section>
      </main>
    </div>
  );
}
