import About from "@/components/layout/about";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Contact from "@/components/layout/contact";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div id="banner">
        <Banner />
      </div>

      <div id="about" className="px-[var(--px)] py-20 sm:px-[var(--md-px)]">
        <About />
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