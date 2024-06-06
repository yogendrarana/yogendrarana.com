import About from "@/app/(client)/_components/about";
import Banner from "@/app/(client)/_components/banner";
import Footer from "@/app/(client)/_components/footer";
import Contact from "@/app/(client)/_components/contact";

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