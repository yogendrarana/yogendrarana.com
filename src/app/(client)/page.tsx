import Projects from "./_components/projects";
import About from "@/app/(client)/_components/about";
import Banner from "@/app/(client)/_components/banner";
import Footer from "@/app/(client)/_components/footer";
import Contact from "@/app/(client)/_components/contact";
import HomeContainer from "@/components/util/home-container";

const HomePage = () => {
  return (
    <HomeContainer>
      <div className="flex flex-col gap-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-neutral-900"></div>

        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HomeContainer>
  )
}

export default HomePage;