import React from 'react'
import Link from 'next/link';

import useNavMenu from '@/hooks/useNavMenu'
import Magnetic from "@/components/util/Magnetic"

const DesktopNav = () => {
    const menu = useNavMenu();

    return (
        <div className='flex gap-[3rem] items-center text-[1.5rem] sm:hidden'>
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
    )
}

export default DesktopNav