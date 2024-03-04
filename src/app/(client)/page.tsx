import About from "@/components/layout/About";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>

      <div className="p-[var(--px)] sm:p-[var(--md-px)] flex flex-col justify-between">
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;