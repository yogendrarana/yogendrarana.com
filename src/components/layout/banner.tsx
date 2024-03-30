"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// components
import Navbar from "./navbar";

// data
import { tech } from "@/config/tech"
import { MY_DATA } from "@/data/my-data";

const Banner = () => {
    const name = MY_DATA.name.split("");
    const primary_languages = tech.languages.filter((lang) => lang.name !== "Go");
    const primary_frameworks = tech.frameworks.filter(f => !["Gin", "Nest"].includes(f.name));;
    const primary_stack = [...primary_languages, ...primary_frameworks];

    return (
        <div className='h-screen w-full flex flex-col justify-between relative'>
            <Navbar />

            <div className='lg:flex text-center w-full'>
                <p className="text-[10rem] font-bold sm:text-[5rem]">
                    {name.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </p>
            </div>

            <div
                className='
                    w-full px-[var(--px)] md:px-[var(--md-px)] py-[3rem]
                    flex justify-between items-center 
                    text-[1.5rem] text-center
                    sm:flex-col sm:gap-[2rem] sm:py-[2rem]
                '
            >
                <p className="text-[1.75rem] whitespace-nowrap">{MY_DATA.generalSummary}</p>
                <div className="flex gap-[1rem]">
                    {
                        primary_stack.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 2, marginLeft: "1rem", marginRight: "1rem"}}
                                key={index}
                                className='flex justify-center cursor-pointer bg-white'
                            >
                                <Image
                                    src={item?.logo}
                                    alt={item.name}
                                    className="h-[2.5rem] w-[2.5rem] object-cover"
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner;