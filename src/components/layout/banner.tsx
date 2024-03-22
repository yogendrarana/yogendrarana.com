import Image from "next/image";
import Marquee from "react-fast-marquee"

// components
import Header from "./header";
import { tech } from "@/config/tech"
import { MY_DATA } from "@/data/my-data";

const Banner = () => {
    const primary_languages = tech.languages.filter((lang) => lang.name !== "Go");
    const primary_frameworks = tech.frameworks.filter(f => !["Gin", "Nest"].includes(f.name));;
    const primary_stack = [...primary_languages, ...primary_frameworks];

    return (
        <div className='h-[100vh] w-full flex flex-col justify-between relative'>
            <Header />

            <div className='lg:flex text-center font-bold w-full'>
                {/* <Marquee speed={100}> */}
                    <div className="flex flex-col justify-center gap-[5rem] md:tracking-normal">
                        <p className="text-[10rem] tracking-[1rem]">Yogendra Rana</p>
                        <p className="text-[1.8rem]">{MY_DATA.generalSummary}</p>
                    </div>
                {/* </Marquee> */}
            </div>

            <div
                className='
                    w-full px-[var(--px)] md:px-[var(--md-px)] py-[3rem]
                    flex justify-between items-center 
                    text-[1.5rem] text-center
                    sm:flex-col sm:gap-[2rem] sm:py-[2rem]
                '
            >
                <p className="font-bold text-[1.75rem] whitespace-nowrap">Full Stack Developer</p>
                <div className="flex gap-[.5rem]">
                    {
                        primary_stack.map((item, index) => (
                            <div key={index} className='group p-[.35rem] border flex justify-center items-center cursor-pointer overflow-hidden'>
                                <Image
                                    src={item?.logo}
                                    alt={item.name}
                                    className="h-[4rem] w-[4rem] object-cover"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner;