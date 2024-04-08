import Link from "next/link";
import { MY_DATA } from "@/data/my-data";

// import components
import Magnetic from "./magnetic";

const Socials = () => {
    const socials = MY_DATA.contact.social;
 
    return (
        <div className='flex justify-center items-center gap-6'>
            {
                socials.map((option, index) => (
                    <Magnetic key={index}>
                        <Link
                            href={option.url}
                            target='_blank'
                            className='grid place-items-center'
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
