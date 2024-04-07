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
        <div className='h-[80vh] w-full flex flex-col justify-between relative'>
            <Navbar />

            <div className='flex flex-col flex-1 gap-10 justify-center items-center w-full'>
                <div className="px-[0.75rem] py-[0.25rem] border rounded-full flex items-center gap-[1rem]">
                    <div className="size-[1rem] bg-green-500 rounded-full"> </div>
                    <div className="text-[1.25rem]">{MY_DATA.generalSummary}</div>
                </div>

                <div className="text-[7rem] font-bold sm:text-[4rem]">
                    {name.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer lowercase"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <div className="flex gap-[1rem]">
                    {
                        primary_stack.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 2, marginLeft: "1rem", marginRight: "1rem" }}
                                key={index}
                                className='flex justify-center cursor-pointer bg-white'
                            >
                                <Image
                                    src={item?.logo}
                                    alt={item.name}
                                    className="h-[2.5rem] w-[2.5rem] object-cover opacity-75 hover:opacity-100"
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