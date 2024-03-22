"use client"

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

// data
import { MY_DATA } from '@/data/my-data';

// components
import MenuButton from '../util/menu-button';

// hooks
import { nav_menu } from '@/config/nav';
import { useMenuStore } from '@/store/useMenuStore';

const MobileNav = () => {
    const router = useRouter();
    const socials = MY_DATA.contact.social;
    const main_menu = nav_menu.mainMenu;
    const more_menu = nav_menu.moreMenu;
    const { isMenuOpen, toggleMenu } = useMenuStore();

    const menuVariants = {
        open: { height: "500px", width: "300px", top: "-10px", right: "-10px", transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] } },
        closed: { height: "45px", width: "45px", top: "0px", right: "0px", transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] } }
    }

    return (
        <nav className='hidden sm:flex'>
            <div
                style={{ fontSize: 'var(--normal-font-size)' }}
                className={`flex justify-center gap-[1rem] items-center relative z-50`}
            >
                {/* menu */}
                <motion.div
                    variants={menuVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    initial="closed"
                    className="
                        px-[2rem]
                        absolute right-0 
                        rounded-[25px]
                        overflow-hidden 
                        flex flex-col justify-between
                        bg-gray-200
                        shadow-lg
                        [--menu-height: 600px] sm:[--menu-height: 400px]
                        [--menu-width: 400px] sm:[--menu-width: 300px]
                    "
                >
                    {/* menu list */}
                    <div className="flex flex-col gap-[1rem] pt-[75px] text-[1.8rem]">
                        {
                            main_menu.map((item, index) => {
                                return (
                                    <div
                                        onClick={() => {
                                            toggleMenu()
                                            if (item.label === "Resume") {
                                                window.open(item.href)
                                            } else {
                                                router.push(item.href)
                                            }
                                        }}
                                        key={index}
                                        className="group flex gap-[1rem] items-center cursor-pointer overflow-hidden"
                                    >
                                        <div className="w-[2.5rem] translate-x-[-100%]  group-hover:translate-x-[0] transition-all ease-in-out duration-500">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div
                                            className={`
                                            ${isMenuOpen ? "" : "opacity-0"} 
                                            h-full w-full inline-block translate-x-[-2.5rem] group-hover:translate-x-0 transition-all ease-in-out duration-500`
                                            }
                                        >{item.label}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* footer */}
                    <div className="mt-[1.5rem] py-[1.5rem] flex justify-between gap-[2rem] border-t border-black text-[1.25rem]">

                        {
                            socials.map((social, index) => {
                                return (
                                    <div onClick={() => toggleMenu()} key={index} className="">
                                        <Link
                                            target="_blank"
                                            href={social.url}
                                            className="
                                                inline-block
                                                relative
                                                text-[1.5rem]
                                                before:content-['']
                                                before:py-[1rem]
                                                before:absolute before:bottom-[-0.5rem] before:left-0
                                                before:w-0
                                                before:hover:w-full
                                                before:border-b-2
                                                before:border-black


                                                before:transition-all
                                                before:ease-in-out
                                                before:duration-500
                                            "
                                        >{social.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>

                {/* menu button */}
                <MenuButton />
            </div>
        </nav>
    )
}

export default MobileNav