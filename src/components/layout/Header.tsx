import Link from 'next/link'

import useNavMenu from '@/hooks/useNavMenu'

// import components
import Logo from '@/components/util/Logo'
import Socials from '@/components/util/Socials'
import Magnetic from '../util/Magnetic'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = () => {
    const menu = useNavMenu();

    return (
        <div>
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
                    <DesktopNav />
                    <MobileNav />

                    <div className="sm:hidden mr-[2rem]">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;