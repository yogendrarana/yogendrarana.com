import React from 'react'

// config
import { nav_menu } from '@/config/nav';

// components
import Magnetic from "@/components/util/magnetic"
import { ExternalLink } from '../util/external-link';

const DesktopNav = () => {
    const main_menu = nav_menu.mainMenu;

    return (
        <div className='flex items-center'>
            <div className='flex gap-6 items-center'>
                {
                    main_menu.map((nav, index) => (
                        <Magnetic key={index}>
                            <div className="group">
                                <ExternalLink animate href={nav.href}> {nav.label} </ExternalLink>
                            </div>
                        </Magnetic>
                    ))
                }
            </div>
        </div>
    )
}

export default DesktopNav;