// components
import DesktopNav from './desktop-nav'
import Logo from '@/components/util/logo'
import Socials from '@/components/util/socials'

const Navbar = () => {

    return (
        <div className='h-[var(--nav-height)] w-full flex items-center justify-between relative'>
            <div>
                <Logo />
            </div>

            <div className="flex items-center">
                <DesktopNav />
                <div className="mr-[2rem] hidden sm:flex">
                    <div className='mx-8 text-gray-200'>|</div>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Navbar;