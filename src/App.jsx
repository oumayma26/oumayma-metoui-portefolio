
import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'

function App() {

  return (
      <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section id="home" className="pt-4 mb-20"><Home /></section>
        <section id="services" className="mb-20"><Services /></section>
        <section id="projects" className="mb-20"><Projects /></section>
        <section id="contact" className="mb-20"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}

export default App
