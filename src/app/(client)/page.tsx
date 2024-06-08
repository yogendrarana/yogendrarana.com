import About from "@/app/(client)/_components/about";
import Banner from "@/app/(client)/_components/banner";
import Footer from "@/app/(client)/_components/footer";
import Contact from "@/app/(client)/_components/contact";
import HomeContainer from "@/components/util/home-container";

const HomePage = () => {
  return (
    <HomeContainer>
      <div className="flex flex-col gap-4">
        <Banner />
        <About />
        <Contact />
        <Footer />
      </div>
    </HomeContainer>
  )
}

export default HomePage;