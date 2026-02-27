import Navbar from "./components/Navbar";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}