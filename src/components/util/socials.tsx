import Link from "next/link";
import { MY_DATA } from "@/data/my-data";

// import components
import Magnetic from "./magnetic";

const Socials = () => {
    const socials = MY_DATA.contact.social;
    return (
        <div className='flex justify-center gap-[.75rem]'>
            {
                socials.map((option, index) => (
                    <Magnetic key={index}>
                        <Link
                            href={option.url}
                            target='_blank'
                            className='h-[4rem] w-[4rem] text-[1.5rem] grid place-items-center rounded-full'
                        >
                            <i className={`${option.logo.src}`}> </i>
                        </Link>
                    </Magnetic>
                ))
            }
        </div>
    )
}

export default Socials;
