import About from "./components/About";
import Contact from "./components/Contact";
import CursorAnimation from "./components/CursorAnimation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
      <CursorAnimation/>
    </>
  );
}

export default App;