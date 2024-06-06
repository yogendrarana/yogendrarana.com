// components
import MobileNav from './mobile-nav'
import DesktopNav from './desktop-nav'
import Logo from '@/components/util/logo'
import Socials from '@/components/util/socials'

const Navbar = () => {

    return (
        <div
            className='
                h-[var(--nav-height)] w-full 
                px-[var(--px)] sm:px-[var(--md-px)]
                flex items-center justify-between
                relative
            '
        >
            <div>
                <Logo />
            </div>

            <div className="flex items-center">
                <DesktopNav />
                <MobileNav />

            <div className='mx-8 text-gray-200'>|</div>


                <div className="sm:hidden mr-[2rem]">
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Navbar;