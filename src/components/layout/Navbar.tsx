import Link from 'next/link'

import useNavMenu from '@/hooks/useNavMenu'

// import components
import Logo from '@/components/util/Logo'
import Socials from '@/components/util/Socials'
import Magnetic from '../util/Magnetic'

const Navbar = () => {
    const menu = useNavMenu();

    return (
        <nav>
            <div
                className='
                    h-[var(--header-height)] w-full 
                    px-[var(--px)] sm:px-[var(--md-px)]
                    flex items-center justify-between 
                    relative
                '
            >
                <div>
                    <Logo />
                </div>

                <div className="flex gap-[5rem] items-center">
                    <div className='flex gap-[2.5rem] items-center text-[1.5rem] '>
                        {
                            menu.map((nav, index) => (
                                <Magnetic key={index}>
                                    <div className="group">
                                        <Link
                                            href={nav.href}
                                            target={nav.label === "Resume" ? "_blank" : "_self"}
                                            className="
                                            group
                                            relative
                                            cursor-pointer 
                                            
                                            before:content-['']
                                            before:h-[0.75rem] before:w-[0.75rem]
                                            before:bg-black before:rounded-full
                                            before:absolute before:bottom-[-1rem] before:left-1/2 before:-translate-x-1/2
                                            before:scale-0 group-hover:before:scale-100
                                            before:transition-all before:ease before:duration-300
                                        "
                                        >{nav.label}</Link>
                                    </div>
                                </Magnetic>
                            ))
                        }
                    </div>

                    <div className="sm:hidden mr-[2rem]">
                        <Socials />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar