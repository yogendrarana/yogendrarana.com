
import Watch from "@/components/util/watch";
import Socials from "@/components/util/socials";
import TopButton from "@/components/util/top-button";
import Logo from "../util/logo";

const Footer = () => {
    return (
        <footer
            className='
                min-h-[var(--nav-height)]  
                mt-[2.5rem]  
                px-[var(--px)] sm:px-[var(--md-px)]
                py-[2.5rem] 
                flex flex-col items-center gap-[3rem]
                text-[1.25rem] 
                border-t relative
            '
        >

            {/* row 1 */}
            <div className="w-full flex justify-between items-center gap-[2rem] md:items-center">
                {/* watch */}
                <div className="w-1/3">
                    <Watch />
                </div>

                {/* socials */}
                <div className="w-1/3">
                    <Socials />
                </div>

                {/* email */}
                <div className="w-1/3 flex items-center gap-[2rem] justify-end">
                    <p>Top</p>
                    <TopButton />
                </div>
            </div>
        </footer>
    )
}

export default Footer;