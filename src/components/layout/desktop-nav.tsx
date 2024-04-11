import React from 'react'
import Link from 'next/link';

// config
import { nav_menu } from '@/config/nav';

// components
import Magnetic from "@/components/util/magnetic"

const DesktopNav = () => {
    const main_menu = nav_menu.mainMenu;

    return (
        <div className='flex items-center sm:hidden'>
            <div className='flex gap-6 items-center'>
                {
                    main_menu.map((nav, index) => (
                        <Magnetic key={index}>
                            <div className="group">
                                <Link
                                    href={nav.href}
                                    target={nav.label === "Resume" ? "_blank" : "_self"}
                                    className="
                                        group
                                        relative
                                        cursor-pointer 
                                        hover:font-bold
                                        
                                        before:content-['']
                                        before:h-[0.5rem] before:w-[0.5rem]
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
        </div>
    )
}

export default DesktopNav;