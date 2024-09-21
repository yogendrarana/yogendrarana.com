import { cn } from "@/lib/utils";
import Projects from "./_components/projects";
import About from "@/app/(client)/_components/about";
import Banner from "@/app/(client)/_components/banner";
import Contact from "@/app/(client)/_components/contact";

const HomePage = () => {
  return (
    <div className={cn(
      "flex flex-col gap-4",
      "px-[20px] sm:px-[30px] md:px-[100px] lg:px-[150px] xl:px-[300px]"
    )}>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage;