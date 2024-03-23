import About from "@/components/layout/about";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Contact from "@/components/layout/contact";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div id="banner" className="border-b">
        <Banner />
      </div>

      <div id="about" className="border-b">
        <About />
      </div>

      {/* <div id="projects" className="border-b">
        <Projects />
      </div> */}

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