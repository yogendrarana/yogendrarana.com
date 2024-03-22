import About from "@/components/layout/about";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Contact from "@/components/layout/contact";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      {/* <div id="projects">
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