import About from "@/components/layout/About";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;