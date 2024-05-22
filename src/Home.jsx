import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="grained-bg"></div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Home;
