import Image from "next/image";
import Marquee from "react-fast-marquee"

// components
import Header from "./Header"
import useTechSack from "@/hooks/useTechSack"

const Banner = () => {
    const { languages, frameworks } = useTechSack();
    const primary_languages = languages.filter((lang) => lang.name !== "Go");
    const primary_frameworks = frameworks.filter(f => !["Gin", "Nest"].includes(f.name));;
    const primary_stack = [...primary_languages, ...primary_frameworks];

    return (
        <div className='h-[100vh] w-full flex flex-col justify-between relative'>
            <Header />

            <div className='lg:flex text-center text-[10rem] font-bold w-full'>
                <Marquee speed={100}>
                    <div className="flex justify-center gap-[5rem] tracking-[1rem] md:tracking-normal">
                        <p>*</p>
                        <p>Yogendra</p>
                        <p>Rana</p>
                    </div>
                </Marquee>
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
                <div className="flex gap-[.75rem]">
                    {
                        primary_stack.map((item, index) => (
                            <div key={index} className='group flex justify-center items-center cursor-pointer'>
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