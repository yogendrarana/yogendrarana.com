import React from 'react'
import Link from 'next/link';

import { nav_menu } from '@/config/nav';
import Magnetic from "@/components/util/Magnetic"

const DesktopNav = () => {
    const main_menu = nav_menu.mainMenu;
    const more_menu = nav_menu.moreMenu;

    return (
        <div className='flex items-center gap-[3rem] sm:hidden'>
            <div className='flex gap-[3rem] items-center text-[1.5rem]'>
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

            <div className='text-2xl text-gray-300'>|</div>

            <div className='flex gap-[3rem] items-center text-[1.5rem]'>
                {
                    more_menu.map((nav, index) => (
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
        </div>
    )
}

export default DesktopNav