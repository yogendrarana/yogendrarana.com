import Marquee from "react-fast-marquee"

// components
import Navbar from "./Navbar"

const Banner = () => {
    return (
        <div className='h-[100vh] w-full flex flex-col justify-between relative'>
            <Navbar />

            <div className='lg:flex gap-[3rem] text-center text-[10rem] font-bold w-full'>
                <Marquee speed={100}>
                    <p className="tracking-[1rem] md:tracking-normal"><span className="md:ml-[5rem]">*</span> Yogendra Rana </p>
                </Marquee>
            </div>

            <div
                className='
                    w-full px-[var(--px)] md:px-[var(--md-px)] py-[3rem]
                    flex justify-between items-center 
                    text-[1.5rem] text-center
                '
            >
                <p className="font-bold">Full Stack Developer</p>
                <div className="flex gap-[5rem] md:gap-[3rem]">
                    JavaScript/TS - React/Next - Node/Express
                </div>
            </div>
        </div>
    )
}

export default Banner;